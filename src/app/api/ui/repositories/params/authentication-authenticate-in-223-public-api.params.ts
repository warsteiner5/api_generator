import { AuthenticationAuthenticateIn223PublicApi$Params } from '../../../swagger/fn/authentication/authentication-authenticate-in-223-public-api';

// @ts-ignore
export interface AuthenticationAuthenticateIn223PublicApiParams {
  clientId: string;
  schemaVersion: string;
}

export function authenticationAuthenticateIn223PublicApiAdapter(params?: AuthenticationAuthenticateIn223PublicApiParams): AuthenticationAuthenticateIn223PublicApi$Params {
  if (!params) {
    return {} as AuthenticationAuthenticateIn223PublicApi$Params;
  }
  return {
      clientId: params.clientId,
      schemaVersion: params.schemaVersion,
  };
}
