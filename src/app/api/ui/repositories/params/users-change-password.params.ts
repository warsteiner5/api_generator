import { ChangePasswordRequestAlt } from '../../models/change-password-request-alt.interface';
import { UsersChangePassword$Params } from '../../../swagger/fn/users/users-change-password';
import { apiChangePasswordRequestAltDtoAdapter } from '../../adapters/models/api-change-password-request.adapter';

// @ts-ignore
export interface UsersChangePasswordParams {
  body?: ChangePasswordRequestAlt;
}

export function usersChangePasswordAdapter(params?: UsersChangePasswordParams): UsersChangePassword$Params {
  if (!params) {
    return {} as UsersChangePassword$Params;
  }
  return {
      body: apiChangePasswordRequestAltDtoAdapter(params.body),
  };
}
