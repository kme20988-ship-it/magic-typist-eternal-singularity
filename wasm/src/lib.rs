use wasm_bindgen::prelude::*;
use serde::{Serialize, Deserialize};

#[wasm_bindgen]
pub fn calculate_upgrade_cost(base_cost: f64, cost_multiplier: f64, current_level: u32) -> f64 {
    (base_cost * cost_multiplier.powi(current_level as i32)).floor()
}

#[wasm_bindgen]
pub fn calculate_idle_income(base_income: f64, level: u32) -> f64 {
    base_income * (level as f64)
}

#[wasm_bindgen]
pub fn calculate_damage(
    base_attack: f64, 
    deck_attack: f64, 
    is_element_match: bool, 
    is_rapid_tap: bool, 
    artifact_damage_mult: f64,
    multiplier: f64
) -> f64 {
    let mut damage = base_attack + (deck_attack * 0.1);
    if is_element_match { damage *= 1.5; }
    if is_rapid_tap { damage *= 1.2; }
    damage *= artifact_damage_mult;
    damage * multiplier
}

#[wasm_bindgen]
pub fn calculate_reward(base_reward: f64, combo: u32, combo_multiplier: f64, multiplier: f64) -> f64 {
    let base = base_reward + ((combo as f64) * combo_multiplier).floor();
    (base * multiplier).floor()
}

#[wasm_bindgen]
pub fn calculate_rebirth_orbs(total_lifetime_money: f64, threshold: f64, divisor: f64) -> f64 {
    if total_lifetime_money < threshold {
        return 0.0;
    }
    (total_lifetime_money / divisor).sqrt().floor()
}

#[wasm_bindgen]
pub fn calculate_monster_hp(base_hp: f64, difficulty_mult: f64, stage: u32, is_boss: bool) -> f64 {
    let mut hp = base_hp * difficulty_mult * (stage as f64);
    if is_boss { hp *= 5.0; }
    hp
}
