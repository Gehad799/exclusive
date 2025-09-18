export interface UpdatePasswordPayload {
  currentPassword: string;
  password: string;
  rePassword: string;
}

export interface ForgetPasswordPayload {
  email: string;
}
export interface AuthResponse {
  message?: string;
  statusMsg?: string;
  status?: string;
}
export interface VerifyResetCodePayload {
  resetCode: string;
}
