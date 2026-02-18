import { AuthVerifyLoginPassword$Params } from '../../../swagger/fn/auth/auth-verify-login-password';
import { LoginVerifyModelAlt } from '../../models/login-verify-model-alt.interface';
import { adaptApiLoginVerifyModelAltDto } from '../../adapters/toDto/api-login-verify-model.adapter';

export interface AuthVerifyLoginPasswordParams {
  body?: LoginVerifyModelAlt;
}

export const authVerifyLoginPasswordParamsAdapter = {
  adapt(params?: AuthVerifyLoginPasswordParams): AuthVerifyLoginPassword$Params {
    if (!params) {
      return {} as AuthVerifyLoginPassword$Params;
    }
    return {
      body: adaptApiLoginVerifyModelAltDto(params.body),
    };
  }
};
