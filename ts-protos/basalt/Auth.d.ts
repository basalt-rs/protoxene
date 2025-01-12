import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type { LoginRequest as _basalt_LoginRequest, LoginRequest__Output as _basalt_LoginRequest__Output } from '../basalt/LoginRequest';
import type { LoginResponse as _basalt_LoginResponse, LoginResponse__Output as _basalt_LoginResponse__Output } from '../basalt/LoginResponse';
export interface AuthClient extends grpc.Client {
    login(argument: _basalt_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_basalt_LoginResponse__Output>): grpc.ClientUnaryCall;
    login(argument: _basalt_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_basalt_LoginResponse__Output>): grpc.ClientUnaryCall;
    login(argument: _basalt_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_basalt_LoginResponse__Output>): grpc.ClientUnaryCall;
    login(argument: _basalt_LoginRequest, callback: grpc.requestCallback<_basalt_LoginResponse__Output>): grpc.ClientUnaryCall;
}
export interface AuthHandlers extends grpc.UntypedServiceImplementation {
    login: grpc.handleUnaryCall<_basalt_LoginRequest__Output, _basalt_LoginResponse>;
}
export interface AuthDefinition extends grpc.ServiceDefinition {
    login: MethodDefinition<_basalt_LoginRequest, _basalt_LoginResponse, _basalt_LoginRequest__Output, _basalt_LoginResponse__Output>;
}
//# sourceMappingURL=Auth.d.ts.map