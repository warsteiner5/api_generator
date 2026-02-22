import { AuthGetExternalUserInfo$Params } from '../../../swagger/fn/auth/auth-get-external-user-info';

// @ts-ignore
export interface AuthGetExternalUserInfoParams {
}

export function authGetExternalUserInfoAdapter(params?: AuthGetExternalUserInfoParams): AuthGetExternalUserInfo$Params {
  if (!params) {
    return {} as AuthGetExternalUserInfo$Params;
  }
  return {
  };
}
