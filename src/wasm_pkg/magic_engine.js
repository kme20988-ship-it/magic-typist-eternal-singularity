let wasm;

/**
 * @param {number} base_attack
 * @param {number} deck_attack
 * @param {boolean} is_element_match
 * @param {boolean} is_rapid_tap
 * @param {number} artifact_damage_mult
 * @param {number} multiplier
 * @returns {number}
 */
export function calculate_damage(base_attack, deck_attack, is_element_match, is_rapid_tap, artifact_damage_mult, multiplier) {
    const ret = wasm.calculate_damage(base_attack, deck_attack, is_element_match, is_rapid_tap, artifact_damage_mult, multiplier);
    return ret;
}

/**
 * @param {number} base_income
 * @param {number} level
 * @returns {number}
 */
export function calculate_idle_income(base_income, level) {
    const ret = wasm.calculate_idle_income(base_income, level);
    return ret;
}

/**
 * @param {number} base_hp
 * @param {number} difficulty_mult
 * @param {number} stage
 * @param {boolean} is_boss
 * @returns {number}
 */
export function calculate_monster_hp(base_hp, difficulty_mult, stage, is_boss) {
    const ret = wasm.calculate_monster_hp(base_hp, difficulty_mult, stage, is_boss);
    return ret;
}

/**
 * @param {number} total_lifetime_money
 * @param {number} threshold
 * @param {number} divisor
 * @returns {number}
 */
export function calculate_rebirth_orbs(total_lifetime_money, threshold, divisor) {
    const ret = wasm.calculate_rebirth_orbs(total_lifetime_money, threshold, divisor);
    return ret;
}

/**
 * @param {number} base_reward
 * @param {number} combo
 * @param {number} combo_multiplier
 * @param {number} multiplier
 * @returns {number}
 */
export function calculate_reward(base_reward, combo, combo_multiplier, multiplier) {
    const ret = wasm.calculate_reward(base_reward, combo, combo_multiplier, multiplier);
    return ret;
}

/**
 * @param {number} base_cost
 * @param {number} cost_multiplier
 * @param {number} current_level
 * @returns {number}
 */
export function calculate_upgrade_cost(base_cost, cost_multiplier, current_level) {
    const ret = wasm.calculate_upgrade_cost(base_cost, cost_multiplier, current_level);
    return ret;
}

const EXPECTED_RESPONSE_TYPES = new Set(['basic', 'cors', 'default']);

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && EXPECTED_RESPONSE_TYPES.has(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_init_externref_table = function() {
        const table = wasm.__wbindgen_externrefs;
        const offset = table.grow(4);
        table.set(0, undefined);
        table.set(offset + 0, undefined);
        table.set(offset + 1, null);
        table.set(offset + 2, true);
        table.set(offset + 3, false);
    };

    return imports;
}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;


    wasm.__wbindgen_start();
    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (typeof module !== 'undefined') {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (typeof module_or_path !== 'undefined') {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (typeof module_or_path === 'undefined') {
        module_or_path = new URL('magic_engine_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync };
export default __wbg_init;
