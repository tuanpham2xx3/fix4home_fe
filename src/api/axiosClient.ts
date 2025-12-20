import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.example.com", // đổi theo server thật
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error);
    throw error;
  }
);

export default axiosClient;
