use analytics_next::{AnalyticsBrowser, Settings};
use yew::prelude::*;

const WRITE_KEY: &str = include_str!("writekey.txt");

#[function_component(Application)]
pub fn application() -> Html {
    let tracker = use_memo(
        |()| {
            let a = AnalyticsBrowser::load(Settings {
                write_key: WRITE_KEY.to_string(),
            });
            a.page();
            a
        },
        (),
    );

    let onclick_track = {
        let tracker = tracker.clone();
        use_callback(
            move |_, ()| {
                tracker.build("Tracked me!").complete();
            },
            (),
        )
    };

    let onclick_track_props = {
        let tracker = tracker.clone();
        use_callback(
            move |_, ()| {
                tracker
                    .build("Tracked me!")
                    .add_property("Foo", "Bar")
                    .add_property("Number", 42)
                    .add_property("O'rly", true)
                    .complete();
            },
            (),
        )
    };

    html!(
        <>
            <h1>{"analytics-next example using Yew"}</h1>

            <section>
                <h2>{"Basic"}</h2>

                <button type="button" onclick={onclick_track}>{"Track"}</button>
                <button type="button" onclick={onclick_track_props}>{"Track with properties"}</button>
            </section>
        </>
    )
}
