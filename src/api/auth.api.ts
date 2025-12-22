import axios from "axios";

const API_BASE = "https://api.iceteadev.site/api/v1/auth";

export const authApi = {
  register: (email: string, password: string) =>
    axios.post(`${API_BASE}/register`, {
      email,
      password,
      role: "CUSTOMER",
    }),

  checkActivationStatus: (email: string) =>
    axios.get(`${API_BASE}/check-activation-status`, {
      params: { email },
    }),
  login: (usernameOrEmail: string, password: string) =>
    axios.post(`${API_BASE}/login`, {
      usernameOrEmail,
      password,
    }),
};
