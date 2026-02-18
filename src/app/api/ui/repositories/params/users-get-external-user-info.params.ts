import { UsersGetExternalUserInfo$Params } from '../../../swagger/fn/users/users-get-external-user-info';

export interface UsersGetExternalUserInfoParams {
}

export const usersGetExternalUserInfoParamsAdapter = {
  adapt(params?: UsersGetExternalUserInfoParams): UsersGetExternalUserInfo$Params {
    if (!params) {
      return {} as UsersGetExternalUserInfo$Params;
    }
    return {
    };
  }
};
