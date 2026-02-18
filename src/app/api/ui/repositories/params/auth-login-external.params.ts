import { AuthLoginExternal$Params } from '../../../swagger/fn/auth/auth-login-external';
import { SignInModelAlt } from '../../models/sign-in-model-alt.interface';
import { adaptApiSignInModelAltDto } from '../../adapters/toDto/api-sign-in-model.adapter';

export interface AuthLoginExternalParams {
  externalSystemIdentityKey: string;
  body?: SignInModelAlt;
}

export const authLoginExternalParamsAdapter = {
  adapt(params?: AuthLoginExternalParams): AuthLoginExternal$Params {
    if (!params) {
      return {} as AuthLoginExternal$Params;
    }
    return {
      externalSystemIdentityKey: params.externalSystemIdentityKey,
      body: adaptApiSignInModelAltDto(params.body),
    };
  }
};
