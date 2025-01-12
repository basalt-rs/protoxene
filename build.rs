fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure().compile_protos(&["protobuf/basalt.proto"], &["protobuf"])?;
    Ok(())
}
