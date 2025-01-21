import BaseService from "./baseService";

class LoginService extends BaseService {
  constructor() {
    super();
  }

  async postLogin(data: { username: string; password: string }): Promise<any> {
    return await this.post("/auth/login", data);
  }
}

export default new LoginService();
