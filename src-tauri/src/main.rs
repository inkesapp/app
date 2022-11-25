#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

extern crate inkes_core;
extern crate inkes_domain;
extern crate serde;

use inkes_core::model::{AnalyticsRequestModel, ProgramInfoResponseModel};
use std::collections::HashMap;

#[tauri::command]
fn get_analitycs(from_date: &str, to_date: &str) -> Vec<ProgramInfoResponseModel> {
    println!("Invoing get analytics!");
    let request = AnalyticsRequestModel::from_str(from_date, to_date).unwrap();
    inkes_core::get_analytics(request).unwrap()
}

#[tauri::command]
fn get_colortheme() -> HashMap<&'static str, &'static str> {
    HashMap::from([
        ("accent", "#2d78d6"),
        ("accent600", "#4b89d6"),
        ("black", "#2b2b2b"),
        ("white", "#ffffff"),
        ("primary", "#dc143c"),
        ("secondary", "#008080"),
        ("darkGray", "#333333"),
        ("lightGray", "#525252"),
        ("darkBg", "#000000"),
        ("lightBg", "#2b2b2b"),
        ("red", "#dc143c"),
        ("green", "#008080"),
    ])
}

#[tauri::command]

fn main() {
    let tx = inkes_core::start().expect("Something bad");
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_analitycs, get_colortheme])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
