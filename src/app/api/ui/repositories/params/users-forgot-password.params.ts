import { ForgotPasswordModelAlt } from '../../models/forgot-password-model-alt.interface';
import { UsersForgotPassword$Params } from '../../../swagger/fn/users/users-forgot-password';
import { adaptApiForgotPasswordModelAltDto } from '../../adapters/toDto/api-forgot-password-model.adapter';

export interface UsersForgotPasswordParams {
  body?: ForgotPasswordModelAlt;
}

export const usersForgotPasswordParamsAdapter = {
  adapt(params?: UsersForgotPasswordParams): UsersForgotPassword$Params {
    if (!params) {
      return {} as UsersForgotPassword$Params;
    }
    return {
      body: adaptApiForgotPasswordModelAltDto(params.body),
    };
  }
};
