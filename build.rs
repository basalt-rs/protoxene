#[cfg(all(
    any(all(not(feature = "client"), not(feature = "server")), feature = "all"),
    not(feature = "internal-debug")
))]
fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure().compile_protos(&["protobuf/basalt.proto"], &["protobuf"])?;
    Ok(())
}
#[cfg(feature = "internal-debug")]
fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .out_dir("./")
        .compile_protos(&["protobuf/basalt.proto"], &["protobuf"])?;
    panic!(
        "feature flag internal-debug is only to be used for inspection during development of protoxene"
    )
}
#[cfg(all(
    feature = "client",
    all(not(feature = "all"), not(feature = "internal-debug"))
))]
fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_client(true)
        .build_server(false)
        .compile_protos(&["protobuf/basalt.proto"], &["protobuf"])?;
    Ok(())
}
#[cfg(all(
    feature = "server",
    all(not(feature = "all"), not(feature = "internal-debug"))
))]
fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_client(false)
        .build_server(true)
        .compile_protos(&["protobuf/basalt.proto"], &["protobuf"])?;
    Ok(())
}
