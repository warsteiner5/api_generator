import { AuthLoginExternal$Params } from '../../../swagger/fn/auth/auth-login-external';
import { SignInModelAlt } from '../../models/sign-in-model-alt.interface';
import { apiSignInModelAltDtoAdapter } from '../../adapters/models/api-sign-in-model.adapter';

// @ts-ignore
export interface AuthLoginExternalParams {
  externalSystemIdentityKey: string;
  body?: SignInModelAlt;
}

export function authLoginExternalAdapter(params?: AuthLoginExternalParams): AuthLoginExternal$Params {
  if (!params) {
    return {} as AuthLoginExternal$Params;
  }
  return {
      externalSystemIdentityKey: params.externalSystemIdentityKey,
      body: apiSignInModelAltDtoAdapter(params.body),
  };
}
