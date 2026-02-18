import { AuthGetExternalUserInfo$Params } from '../../../swagger/fn/auth/auth-get-external-user-info';

export interface AuthGetExternalUserInfoParams {
}

export const authGetExternalUserInfoParamsAdapter = {
  adapt(params?: AuthGetExternalUserInfoParams): AuthGetExternalUserInfo$Params {
    if (!params) {
      return {} as AuthGetExternalUserInfo$Params;
    }
    return {
    };
  }
};
