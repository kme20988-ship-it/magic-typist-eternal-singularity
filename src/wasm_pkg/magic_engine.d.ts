/* tslint:disable */
/* eslint-disable */

export function calculate_damage(base_attack: number, deck_attack: number, is_element_match: boolean, is_rapid_tap: boolean, artifact_damage_mult: number, multiplier: number): number;

export function calculate_idle_income(base_income: number, level: number): number;

export function calculate_monster_hp(base_hp: number, difficulty_mult: number, stage: number, is_boss: boolean): number;

export function calculate_rebirth_orbs(total_lifetime_money: number, threshold: number, divisor: number): number;

export function calculate_reward(base_reward: number, combo: number, combo_multiplier: number, multiplier: number): number;

export function calculate_upgrade_cost(base_cost: number, cost_multiplier: number, current_level: number): number;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly calculate_damage: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly calculate_idle_income: (a: number, b: number) => number;
  readonly calculate_monster_hp: (a: number, b: number, c: number, d: number) => number;
  readonly calculate_reward: (a: number, b: number, c: number, d: number) => number;
  readonly calculate_rebirth_orbs: (a: number, b: number, c: number) => number;
  readonly calculate_upgrade_cost: (a: number, b: number, c: number) => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
