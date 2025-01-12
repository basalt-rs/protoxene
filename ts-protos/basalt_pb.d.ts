import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file basalt.proto.
 */
export declare const file_basalt: GenFile;
/**
 * @generated from message basalt.LoginRequest
 */
export type LoginRequest = Message<"basalt.LoginRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string password = 2;
     */
    password: string;
};
/**
 * Describes the message basalt.LoginRequest.
 * Use `create(LoginRequestSchema)` to create a new message.
 */
export declare const LoginRequestSchema: GenMessage<LoginRequest>;
/**
 * @generated from message basalt.LoginResponse
 */
export type LoginResponse = Message<"basalt.LoginResponse"> & {
    /**
     * @generated from field: string sessionToken = 1;
     */
    sessionToken: string;
};
/**
 * Describes the message basalt.LoginResponse.
 * Use `create(LoginResponseSchema)` to create a new message.
 */
export declare const LoginResponseSchema: GenMessage<LoginResponse>;
/**
 * @generated from service basalt.Auth
 */
export declare const Auth: GenService<{
    /**
     * @generated from rpc basalt.Auth.login
     */
    login: {
        methodKind: "unary";
        input: typeof LoginRequestSchema;
        output: typeof LoginResponseSchema;
    };
}>;
//# sourceMappingURL=basalt_pb.d.ts.map