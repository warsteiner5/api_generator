import { AuthVerifyLoginPassword$Params } from '../../../swagger/fn/auth/auth-verify-login-password';
import { LoginVerifyModelAlt } from '../../models/login-verify-model-alt.interface';
import { apiLoginVerifyModelAltDtoAdapter } from '../../adapters/models/api-login-verify-model.adapter';

// @ts-ignore
export interface AuthVerifyLoginPasswordParams {
  body?: LoginVerifyModelAlt;
}

export function authVerifyLoginPasswordAdapter(params?: AuthVerifyLoginPasswordParams): AuthVerifyLoginPassword$Params {
  if (!params) {
    return {} as AuthVerifyLoginPassword$Params;
  }
  return {
      body: apiLoginVerifyModelAltDtoAdapter(params.body),
  };
}
