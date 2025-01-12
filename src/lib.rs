mod protos {
    tonic::include_proto!("basalt");
}

#[cfg(feature = "client")]
pub mod client {
    pub use crate::protos::auth_client;
}

#[cfg(feature = "server")]
pub mod server {
    pub use crate::protos::auth_server;
}
