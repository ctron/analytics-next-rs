pub use analytics_next_sys as sys;
use gloo_utils::format::JsValueSerdeExt;
use js_sys::{Object, Reflect};
use serde_json::Value;
use std::borrow::Cow;
use std::collections::HashMap;
use std::rc::Rc;
use wasm_bindgen::prelude::*;

#[derive(Clone)]
pub struct AnalyticsBrowser {
    pub instance: Rc<sys::AnalyticsBrowser>,
}

impl PartialEq for AnalyticsBrowser {
    fn eq(&self, other: &Self) -> bool {
        Rc::ptr_eq(&self.instance, &other.instance)
    }
}

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct Settings {
    pub write_key: String,
}

impl From<Settings> for JsValue {
    fn from(value: Settings) -> Self {
        let result = Object::new();
        let _ = Reflect::set(&result, &"writeKey".into(), &value.write_key.into());
        result.into()
    }
}

pub struct TrackingEvent<'a> {
    pub event: Cow<'a, str>,
    pub payload: Option<Value>,
    pub options: Option<Value>,
}

impl<'a> From<&'a str> for TrackingEvent<'a> {
    fn from(event: &'a str) -> Self {
        TrackingEvent {
            event: event.into(),
            payload: None,
            options: None,
        }
    }
}

impl From<String> for TrackingEvent<'static> {
    fn from(event: String) -> Self {
        TrackingEvent {
            event: event.into(),
            payload: None,
            options: None,
        }
    }
}

impl From<(std::string::String, Value)> for TrackingEvent<'static> {
    fn from((event, payload): (String, Value)) -> Self {
        TrackingEvent {
            event: event.into(),
            payload: Some(payload),
            options: None,
        }
    }
}

impl<'a> From<(&'a str, Value)> for TrackingEvent<'a> {
    fn from((event, payload): (&'a str, Value)) -> Self {
        TrackingEvent {
            event: event.into(),
            payload: Some(payload),
            options: None,
        }
    }
}

impl<'a> From<(&'a str, Option<Value>)> for TrackingEvent<'a> {
    fn from((event, payload): (&'a str, Option<Value>)) -> Self {
        TrackingEvent {
            event: event.into(),
            payload,
            options: None,
        }
    }
}

#[derive(Clone, Debug, Default, PartialEq, Eq)]
pub struct User {
    pub id: Option<String>,
    pub traits: Value,
    pub options: Value,
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

    pub fn identify(&self, user: impl Into<User>) {
        let user = user.into();
        let id = user.id.as_deref();
        let traits = JsValue::from_serde(&user.traits).unwrap_or(JsValue::NULL);
        let options = JsValue::from_serde(&user.options).unwrap_or(JsValue::NULL);

        self.instance.identify(id, traits, options);
    }

    pub fn track<'a>(&self, event: impl Into<TrackingEvent<'a>>) {
        let event = event.into();

        let name = &event.event;
        let properties = event
            .payload
            .and_then(|value| JsValue::from_serde(&value).ok())
            .unwrap_or(JsValue::UNDEFINED);
        let options = event
            .options
            .and_then(|value| JsValue::from_serde(&value).ok())
            .unwrap_or(JsValue::UNDEFINED);

        self.instance.track(name, properties, options);
    }

    #[must_use = "A tracking operation must be completed by calling the TrackBuilder::complete() function"]
    pub fn build(&self, event: impl Into<String>) -> TrackBuilder<'_> {
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
            self.instance.track(&self.event, properties, self.options);
        }
    }
}
