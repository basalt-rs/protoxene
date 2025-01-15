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
