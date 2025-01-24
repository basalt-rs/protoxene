import * as grpcWeb from 'grpc-web';

import * as basalt_pb from './basalt_pb'; // proto import: "basalt.proto"


export class AuthClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: basalt_pb.LoginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: basalt_pb.LoginResponse) => void
  ): grpcWeb.ClientReadableStream<basalt_pb.LoginResponse>;

}

export class AuthPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: basalt_pb.LoginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<basalt_pb.LoginResponse>;

}

