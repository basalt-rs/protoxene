pub mod basalt;

#[cfg(feature = "client")]
pub mod client {
    pub use crate::basalt::auth_client;
}

#[cfg(feature = "server")]
pub mod server {
    pub use crate::basalt::auth_server;
}
