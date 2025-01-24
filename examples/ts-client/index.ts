import { LoginRequest, AuthClient } from "protoxene";

const authService = new AuthClient("http://localhost:9090");

try {
    let request = new LoginRequest();
    request.setName("user");
    request.setPassword("password");
    const response = await authService.login(request);
} catch (e) {
    console.log(e);
}
