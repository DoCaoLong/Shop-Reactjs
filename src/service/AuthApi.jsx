import { endpoint } from "./config";
const AuthApi = {
  // async refreshToken() {
  //   let refreshToken = JSON.parse(localStorage.getItem("token"))?.refreshToken;
  //   let res = await fetch(`${endpoint}/elearning/v4/refresh-token`, {
  //     method: "POST",
  //     // dữ liệu gửi lên
  //     body: JSON.stringify({ refreshToken: refreshToken }),
  //     // headers để back end nhận biết truyền 1 json
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => res.json());
  //   if (res?.data.accessToken) {
  //     localStorage.setItem("token", JSON.stringify(res.data));
  //   }
  //   return true;
  // },
  login(form) {
    return fetch(`${endpoint}/login`, {
      method: "POST",
      // dữ liệu gửi lên
      body: JSON.stringify(form),
      // headers để back end nhận biết truyền 1 json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
  // register: (){},
  // async update(data) {
  //   let token = JSON.parse(localStorage.getItem("token"))?.accessToken;
  //   return fetch(`${endpoint}/elearning/v4/profile/update`, {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }).then((res) =>
  //     tokenHandle(res, () => {
  //       return fetch(`${endpoint}/elearning/v4/profile/update`, {
  //         method: "POST",
  //         body: JSON.stringify(data),
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }).then((res) => res.json());
  //     })
  //   );
  // },
 };

// export async function tokenHandle(res, callback) {
//   if (res.status === 200) {
//     return res.json();
//   }
//   if (res.status === 403) {
//     await AuthApi.refreshToken();
//     let token = JSON.parse(localStorage.getItem("token"))?.accessToken;
//      return callback();
//   }
// }
export default AuthApi;
