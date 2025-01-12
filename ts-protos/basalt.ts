import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthClient as _basalt_AuthClient, AuthDefinition as _basalt_AuthDefinition } from './basalt/Auth';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  basalt: {
    Auth: SubtypeConstructor<typeof grpc.Client, _basalt_AuthClient> & { service: _basalt_AuthDefinition }
    LoginRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
  }
}

