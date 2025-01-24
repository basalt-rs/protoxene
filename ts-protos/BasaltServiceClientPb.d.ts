/**
 * @fileoverview gRPC-Web generated client stub for basalt
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as basalt_pb from './basalt_pb';
export declare class AuthClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorlogin: grpcWeb.MethodDescriptor<basalt_pb.LoginRequest, basalt_pb.LoginResponse>;
    login(request: basalt_pb.LoginRequest, metadata?: grpcWeb.Metadata | null): Promise<basalt_pb.LoginResponse>;
    login(request: basalt_pb.LoginRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: basalt_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<basalt_pb.LoginResponse>;
}
//# sourceMappingURL=BasaltServiceClientPb.d.ts.map