import { AuthLogin$Params } from '../../../swagger/fn/auth/auth-login';
import { SignInModelAlt } from '../../models/sign-in-model-alt.interface';
import { adaptApiSignInModelAltDto } from '../../adapters/toDto/api-sign-in-model.adapter';

export interface AuthLoginParams {
  body?: SignInModelAlt;
}

export const authLoginParamsAdapter = {
  adapt(params?: AuthLoginParams): AuthLogin$Params {
    if (!params) {
      return {} as AuthLogin$Params;
    }
    return {
      body: adaptApiSignInModelAltDto(params.body),
    };
  }
};
