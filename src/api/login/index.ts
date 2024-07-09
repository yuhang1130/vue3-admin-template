import { request } from "@/utils/service";
import type * as Login from "./types/login";

/** 获取登录验证码 */
export function getLoginCodeApi(params: { sid: string }) {
  return request<Login.LoginCodeResponseData>({
    url: "user/captcha",
    method: "get",
    params
  });
}

/** 登录并返回 Token */
export function loginApi(data: Login.LoginRequestData) {
  return request<Login.LoginResponseData>({
    url: "user/login",
    method: "post",
    data
  });
}

/** 获取用户详情 */
export function getUserInfoApi() {
  return request<Login.UserInfoResponseData>({
    url: "user/info",
    method: "post"
  });
}
