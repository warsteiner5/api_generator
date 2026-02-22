import { LoginPreferences } from '../../models/login-preferences.interface';
import { UsersSetLoginPreferences$Params } from '../../../swagger/fn/users/users-set-login-preferences';
import { apiLoginPreferencesDtoAdapter } from '../../adapters/models/api-login-preferences-dto.adapter';

// @ts-ignore
export interface UsersSetLoginPreferencesParams {
  body?: LoginPreferences;
}

export function usersSetLoginPreferencesAdapter(params?: UsersSetLoginPreferencesParams): UsersSetLoginPreferences$Params {
  if (!params) {
    return {} as UsersSetLoginPreferences$Params;
  }
  return {
      body: apiLoginPreferencesDtoAdapter(params.body),
  };
}
