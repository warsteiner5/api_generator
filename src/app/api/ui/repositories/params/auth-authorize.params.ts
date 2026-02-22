import { AuthAuthorize$Params } from '../../../swagger/fn/auth/auth-authorize';

// @ts-ignore
export interface AuthAuthorizeParams {
  appUrl: string;
}

export function authAuthorizeAdapter(params?: AuthAuthorizeParams): AuthAuthorize$Params {
  if (!params) {
    return {} as AuthAuthorize$Params;
  }
  return {
      appUrl: params.appUrl,
  };
}
