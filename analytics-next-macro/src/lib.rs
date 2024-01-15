use proc_macro::TokenStream;
use proc_macro2::Span;
use quote::quote;
use syn::{parse_macro_input, GenericParam, Lifetime, LifetimeParam, LitStr};

#[proc_macro_attribute]
pub fn tracking(attr: TokenStream, input: TokenStream) -> TokenStream {
    let attr = parse_macro_input!(attr as LitStr);

    let ast: syn::DeriveInput = syn::parse(input.clone()).unwrap();
    let input = proc_macro2::TokenStream::from(input);

    let name = &ast.ident;

    let mut gen_clone = ast.generics.clone();
    let lt = Lifetime::new("'event", Span::call_site());
    let ltp = LifetimeParam::new(lt);
    gen_clone.params.push(GenericParam::from(ltp));
    let (impl_generics2, _, _) = gen_clone.split_for_impl();
    let (_, ty_generics, where_clause) = ast.generics.split_for_impl();

    let gen = quote!(
        impl #impl_generics2 From<#name #ty_generics> for analytics_next::TrackingEvent<'event> #where_clause {
            fn from(value: #name #ty_generics) -> Self {
                (#attr, serde_json::to_value(&value).ok()).into()
            }
        }

        #input
    );

    gen.into()
}
