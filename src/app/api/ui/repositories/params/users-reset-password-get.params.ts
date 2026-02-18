import { UsersResetPasswordGet$Params } from '../../../swagger/fn/users/users-reset-password-get';

export interface UsersResetPasswordGetParams {
  login: string;
}

export const usersResetPasswordGetParamsAdapter = {
  adapt(params?: UsersResetPasswordGetParams): UsersResetPasswordGet$Params {
    if (!params) {
      return {} as UsersResetPasswordGet$Params;
    }
    return {
      login: params.login,
    };
  }
};
