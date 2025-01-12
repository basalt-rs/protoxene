build-rust:
	cargo build
build-ts:
	npm run gen-protos
build-go:
	echo "Go protos not implemented"

build: build-rust build-ts build-go
