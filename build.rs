#[cfg(any(not(all(feature = "client", feature = "server")), feature = "all"))]
fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure().compile_protos(&["protobuf/basalt.proto"], &["protobuf"])?;
    Ok(())
}
#[cfg(feature = "client")]
fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_client(true)
        .build_server(false)
        .compile_protos(&["protobuf/basalt.proto"], &["protobuf"])?;
    Ok(())
}
#[cfg(feature = "server")]
fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_client(false)
        .build_server(true)
        .compile_protos(&["protobuf/basalt.proto"], &["protobuf"])?;
    Ok(())
}
