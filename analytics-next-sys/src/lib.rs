use wasm_bindgen::prelude::*;

#[cfg_attr(debug_assertions, wasm_bindgen(module = "/js/debug/analytics-next.js"))]
#[cfg_attr(
    not(debug_assertions),
    wasm_bindgen(module = "/js/release/analytics-next.js")
)]
extern "C" {

    pub type AnalyticsBrowser;

    #[wasm_bindgen(constructor)]
    pub fn new() -> AnalyticsBrowser;

    #[wasm_bindgen(method)]
    pub fn load(this: &AnalyticsBrowser, settings: JsValue, opts: JsValue);

    #[wasm_bindgen(method)]
    pub fn identify(this: &AnalyticsBrowser, user: Option<&str>, traits: JsValue, options: JsValue);

    #[wasm_bindgen(method)]
    pub fn track(this: &AnalyticsBrowser, event: &str, properties: JsValue, options: JsValue);

    #[wasm_bindgen(method)]
    pub fn reset(this: &AnalyticsBrowser);

    #[wasm_bindgen(method)]
    pub fn page(this: &AnalyticsBrowser);

    #[wasm_bindgen(method)]
    pub fn debug(this: &AnalyticsBrowser, debug: bool);
}
