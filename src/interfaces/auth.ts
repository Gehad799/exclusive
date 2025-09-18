export interface UpdatePasswordPayload {
  currentPassword: string;
  password: string;
  rePassword: string;
}

export interface ForgetPasswordPayload {
  email: string;
}
export interface ForgetPasswordResponse {
  message: string;
  statusMsg: string;
}