import { AuthLogin$Params } from '../../../swagger/fn/auth/auth-login';
import { SignInModelAlt } from '../../models/sign-in-model-alt.interface';
import { apiSignInModelAltDtoAdapter } from '../../adapters/models/api-sign-in-model.adapter';

// @ts-ignore
export interface AuthLoginParams {
  body?: SignInModelAlt;
}

export function authLoginAdapter(params?: AuthLoginParams): AuthLogin$Params {
  if (!params) {
    return {} as AuthLogin$Params;
  }
  return {
      body: apiSignInModelAltDtoAdapter(params.body),
  };
}
