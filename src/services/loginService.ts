import BaseService from "./baseService";

class LoginService extends BaseService {
  constructor() {
    super("");
  }

  async postLogin(data: { username: string; password: string }): Promise<any> {
    try {
      const response = await this.post("/login", data);
      return response.data;
    } catch (error: any) {
      throw new Error(`Error on login: ${error.message}`);
    }
  }
}

export default new LoginService();
