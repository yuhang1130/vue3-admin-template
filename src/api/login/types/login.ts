export interface LoginRequestData {
  user_name: string
  /** 密码 */
  pass_word: string
  /** 验证码 */
  code: string
  sid: string
}

export interface UserInfoData {
  user_name: string;
  is_admin: boolean;
  phone: string;
  email: string;
  roles: string[]
}

export type LoginCodeResponseData = ApiResponseData<string>

export type LoginResponseData = ApiResponseData<{ token: string }>

export type UserInfoResponseData = ApiResponseData<UserInfoData>
