import { LoginRequest } from "../../ts-protos/basalt_pb";
import { AuthClient } from "../../ts-protos/BasaltServiceClientPb";

const authService = new AuthClient("http://localhost:9090");

try {
    let request = new LoginRequest();
    request.setName("user");
    request.setPassword("password");
    const response = await authService.login(request);
} catch (e) {
    console.log(e);
}
