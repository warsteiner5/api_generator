import { UsersResetPasswordGet$Params } from '../../../swagger/fn/users/users-reset-password-get';

// @ts-ignore
export interface UsersResetPasswordGetParams {
  login: string;
}

export function usersResetPasswordGetAdapter(params?: UsersResetPasswordGetParams): UsersResetPasswordGet$Params {
  if (!params) {
    return {} as UsersResetPasswordGet$Params;
  }
  return {
      login: params.login,
  };
}
