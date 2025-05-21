import axios from "axios";
// import { parseCookies, destroyCookie } from "nookies";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

request.interceptors.request.use(
  (config) => {
    // const cookies = parseCookies();

    if (cookies.token) {
      config.headers["Authorization"] = `Bearer ${cookies.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// eger 401 unothized hatasi geliyorsa tokeni sil ve login sayfasina yonlendir
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // const token = parseCookies().token;
    // if (error.response.status === 401) {
    //   destroyCookie(null, "token");

    //   if (typeof window !== "undefined" && !!token) {
    //     window.location.href = "/login";
    //   }
    // }
    return Promise.reject(error);
  }
);
