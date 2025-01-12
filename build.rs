fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .out_dir("src")
        .compile_protos(&["protobuf/basalt.proto"], &["protobuf"])?;
    Ok(())
}
