import { AuthClientImpl, LoginRequest } from "protoxene";
import { create } from "@bufbuild/protobuf";
import * as grpc from "grpc";
import type { UnaryCallback } from "@grpc/grpc-js/build/src/client";
import { createChannel, createClient } from "nice-grpc";

const conn = createChannel("localhost:8080");

const client = createClient(AuthClientImpl, channel);
