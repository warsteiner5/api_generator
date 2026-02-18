import { UsersRemoveLoginPreferences$Params } from '../../../swagger/fn/users/users-remove-login-preferences';

export interface UsersRemoveLoginPreferencesParams {
}

export const usersRemoveLoginPreferencesParamsAdapter = {
  adapt(params?: UsersRemoveLoginPreferencesParams): UsersRemoveLoginPreferences$Params {
    if (!params) {
      return {} as UsersRemoveLoginPreferences$Params;
    }
    return {
    };
  }
};
