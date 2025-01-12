build-rust:
	cargo build
build-ts:
	npm i
	npm run gen-protos
	npm run build
build-go:
	echo "Go protos not implemented"

build: build-rust build-ts build-go
