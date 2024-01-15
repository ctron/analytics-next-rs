use analytics_next::{tracking, TrackingEvent};
use serde::Serialize;
use serde_json::json;

#[test]
pub fn test_derive_1() {
    #[derive(serde::Serialize)]
    #[tracking("Example")]
    struct ExampleEvent {
        payload: bool,
    }

    let event: TrackingEvent = ExampleEvent { payload: true }.into();
    assert_eq!(event.event, "Example");
    assert_eq!(
        event.payload,
        Some(json!({
            "payload": true,
        }))
    );
    assert_eq!(event.options, None);
}

#[test]
pub fn test_derive_2() {
    #[derive(serde::Serialize)]
    #[tracking("Example")]
    struct ExampleEvent<'a> {
        payload: &'a str,
    }

    let event: TrackingEvent = ExampleEvent { payload: "foo" }.into();
    assert_eq!(event.event, "Example");
    assert_eq!(
        event.payload,
        Some(json!({
            "payload": "foo",
        }))
    );
    assert_eq!(event.options, None);
}

#[test]
pub fn test_derive_3() {
    #[derive(serde::Serialize)]
    #[tracking("Example")]
    struct ExampleEvent<'a, T>
    where
        T: Serialize + ?Sized,
    {
        payload: &'a T,
    }

    let event: TrackingEvent = ExampleEvent { payload: "foo" }.into();
    assert_eq!(event.event, "Example");
    assert_eq!(
        event.payload,
        Some(json!({
            "payload": "foo",
        }))
    );
    assert_eq!(event.options, None);
}
