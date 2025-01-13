// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: basalt.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "basalt";

export interface LoginRequest {
  name: string;
  password: string;
}

export interface LoginResponse {
  sessionToken: string;
}

function createBaseLoginRequest(): LoginRequest {
  return { name: "", password: "" };
}

export const LoginRequest: MessageFns<LoginRequest> = {
  encode(message: LoginRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginRequest>, I>>(base?: I): LoginRequest {
    return LoginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(object: I): LoginRequest {
    const message = createBaseLoginRequest();
    message.name = object.name ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseLoginResponse(): LoginResponse {
  return { sessionToken: "" };
}

export const LoginResponse: MessageFns<LoginResponse> = {
  encode(message: LoginResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sessionToken !== "") {
      writer.uint32(10).string(message.sessionToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.sessionToken = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginResponse {
    return { sessionToken: isSet(object.sessionToken) ? globalThis.String(object.sessionToken) : "" };
  },

  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
    if (message.sessionToken !== "") {
      obj.sessionToken = message.sessionToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginResponse>, I>>(base?: I): LoginResponse {
    return LoginResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginResponse>, I>>(object: I): LoginResponse {
    const message = createBaseLoginResponse();
    message.sessionToken = object.sessionToken ?? "";
    return message;
  },
};

export interface Auth {
  login(request: LoginRequest): Promise<LoginResponse>;
}

export const AuthServiceName = "basalt.Auth";
export class AuthClientImpl implements Auth {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || AuthServiceName;
    this.rpc = rpc;
    this.login = this.login.bind(this);
  }
  login(request: LoginRequest): Promise<LoginResponse> {
    const data = LoginRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "login", data);
    return promise.then((data) => LoginResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
