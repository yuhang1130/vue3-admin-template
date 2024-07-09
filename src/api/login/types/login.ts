export interface LoginRequestData {
  userName: string;
  passWord: string;
  code: string;
  sid: string;
}

export interface UserInfoData {
  userName: string;
  isAdmin: boolean;
  phone: string;
  email: string;
  roles: string[];
}

export interface InputDomType {
  prop: string;
  vModel: "userName" | "passWord" | "code";
  placeholder: string;
  type: string;
  tabIndex: string;
  prefixIcon: string;
  size: "" | "default" | "small" | "large";
  showPassword: boolean;
  showCodeUrl: boolean;
}

export type ApiResponseData<T> = {
  data: T;
  success: boolean;
  message?: string;
};

export type LoginCodeResponseData = ApiResponseData<string>;

export type LoginResponseData = ApiResponseData<{ token: string }>;

export type UserInfoResponseData = ApiResponseData<UserInfoData>;
