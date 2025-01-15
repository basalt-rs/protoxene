import { AuthClientImpl, GrpcWebImpl } from "protoxene";
import { createChannel, createClient } from "nice-grpc";

const impl = new GrpcWebImpl("http://localhost:8080", { debug: true });

const authService = new AuthClientImpl(impl);

try {
    const response = await authService.login({
        name: "username",
        password: "password",
    });
} catch (e) {
    console.log(e);
}
