import { UsersGetLoginPreferences$Params } from '../../../swagger/fn/users/users-get-login-preferences';

export interface UsersGetLoginPreferencesParams {
}

export const usersGetLoginPreferencesParamsAdapter = {
  adapt(params?: UsersGetLoginPreferencesParams): UsersGetLoginPreferences$Params {
    if (!params) {
      return {} as UsersGetLoginPreferences$Params;
    }
    return {
    };
  }
};
