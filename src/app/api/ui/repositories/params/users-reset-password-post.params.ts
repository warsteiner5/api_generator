import { ResetPasswordModelAlt } from '../../models/reset-password-model-alt.interface';
import { UsersResetPasswordPost$Params } from '../../../swagger/fn/users/users-reset-password-post';
import { adaptApiResetPasswordModelAltDto } from '../../adapters/toDto/api-reset-password-model.adapter';

export interface UsersResetPasswordPostParams {
  body?: ResetPasswordModelAlt;
}

export const usersResetPasswordPostParamsAdapter = {
  adapt(params?: UsersResetPasswordPostParams): UsersResetPasswordPost$Params {
    if (!params) {
      return {} as UsersResetPasswordPost$Params;
    }
    return {
      body: adaptApiResetPasswordModelAltDto(params.body),
    };
  }
};
