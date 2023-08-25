pub use analytics_next_sys as sys;
use gloo_utils::format::JsValueSerdeExt;
use serde_json::Value;
use std::collections::HashMap;
use std::rc::Rc;
use wasm_bindgen::prelude::*;

#[derive(Clone)]
pub struct AnalyticsBrowser {
    instance: Rc<sys::AnalyticsBrowser>,
}

impl PartialEq for AnalyticsBrowser {
    fn eq(&self, other: &Self) -> bool {
        Rc::ptr_eq(&self.instance, &other.instance)
    }
}

#[wasm_bindgen(getter_with_clone)]
pub struct Settings {
    #[wasm_bindgen(js_name = "writeKey")]
    pub write_key: String,
}

impl AnalyticsBrowser {
    pub fn load(settings: Settings) -> Self {
        Self::load_with_options(settings, JsValue::UNDEFINED)
    }

    pub fn load_with_options(settings: Settings, options: JsValue) -> Self {
        let instance = sys::AnalyticsBrowser::new();
        instance.load(settings.into(), options);
        Self {
            instance: Rc::new(instance),
        }
    }

    #[must_use = "A tracking operation must be completed by calling the TrackBuilder::complete() function"]
    pub fn track(&self, event: impl Into<String>) -> TrackBuilder<'_> {
        let event = event.into();
        TrackBuilder {
            instance: &self.instance,
            event,
            properties: HashMap::new(),
            options: JsValue::UNDEFINED,
        }
    }

    pub fn page(&self) {
        self.instance.page();
    }
}

pub struct TrackBuilder<'a> {
    pub instance: &'a sys::AnalyticsBrowser,
    pub event: String,
    pub properties: HashMap<String, Value>,
    pub options: JsValue,
}

impl<'a> TrackBuilder<'a> {
    pub fn options(mut self, options: JsValue) -> Self {
        self.options = options;
        self
    }

    pub fn properties(mut self, properties: HashMap<String, Value>) -> Self {
        self.properties = properties;
        self
    }

    pub fn extend_properties(
        mut self,
        properties: impl IntoIterator<Item = (String, Value)>,
    ) -> Self {
        self.properties.extend(properties);
        self
    }

    pub fn add_property(mut self, key: impl Into<String>, value: impl Into<Value>) -> Self {
        self.properties.insert(key.into(), value.into());
        self
    }

    pub fn complete(self) {
        if let Ok(properties) = JsValue::from_serde(&self.properties) {
            self.instance.track(self.event, properties, self.options);
        }
    }
}
