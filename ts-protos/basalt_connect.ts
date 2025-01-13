// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file basalt.proto (package basalt, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { LoginRequest, LoginResponse } from "./basalt_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service basalt.Auth
 */
export const Auth = {
  typeName: "basalt.Auth",
  methods: {
    /**
     * @generated from rpc basalt.Auth.login
     */
    login: {
      name: "login",
      I: LoginRequest,
      O: LoginResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

