import { ResetPasswordModelAlt } from '../../models/reset-password-model-alt.interface';
import { UsersResetPasswordPost$Params } from '../../../swagger/fn/users/users-reset-password-post';
import { apiResetPasswordModelAltDtoAdapter } from '../../adapters/models/api-reset-password-model.adapter';

// @ts-ignore
export interface UsersResetPasswordPostParams {
  body?: ResetPasswordModelAlt;
}

export function usersResetPasswordPostAdapter(params?: UsersResetPasswordPostParams): UsersResetPasswordPost$Params {
  if (!params) {
    return {} as UsersResetPasswordPost$Params;
  }
  return {
      body: apiResetPasswordModelAltDtoAdapter(params.body),
  };
}
