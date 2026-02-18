import { UsersGetOpenPartUserShops$Params } from '../../../swagger/fn/users/users-get-open-part-user-shops';

export interface UsersGetOpenPartUserShopsParams {
}

export const usersGetOpenPartUserShopsParamsAdapter = {
  adapt(params?: UsersGetOpenPartUserShopsParams): UsersGetOpenPartUserShops$Params {
    if (!params) {
      return {} as UsersGetOpenPartUserShops$Params;
    }
    return {
    };
  }
};
