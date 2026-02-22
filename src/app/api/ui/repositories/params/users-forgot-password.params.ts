import { ForgotPasswordModelAlt } from '../../models/forgot-password-model-alt.interface';
import { UsersForgotPassword$Params } from '../../../swagger/fn/users/users-forgot-password';
import { apiForgotPasswordModelAltDtoAdapter } from '../../adapters/models/api-forgot-password-model.adapter';

// @ts-ignore
export interface UsersForgotPasswordParams {
  body?: ForgotPasswordModelAlt;
}

export function usersForgotPasswordAdapter(params?: UsersForgotPasswordParams): UsersForgotPassword$Params {
  if (!params) {
    return {} as UsersForgotPassword$Params;
  }
  return {
      body: apiForgotPasswordModelAltDtoAdapter(params.body),
  };
}
