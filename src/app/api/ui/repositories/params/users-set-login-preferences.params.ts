import { LoginPreferences } from '../../models/login-preferences.interface';
import { UsersSetLoginPreferences$Params } from '../../../swagger/fn/users/users-set-login-preferences';
import { adaptApiLoginPreferencesDto } from '../../adapters/toDto/api-login-preferences-dto.adapter';

export interface UsersSetLoginPreferencesParams {
  body?: LoginPreferences;
}

export const usersSetLoginPreferencesParamsAdapter = {
  adapt(params?: UsersSetLoginPreferencesParams): UsersSetLoginPreferences$Params {
    if (!params) {
      return {} as UsersSetLoginPreferences$Params;
    }
    return {
      body: adaptApiLoginPreferencesDto(params.body),
    };
  }
};
