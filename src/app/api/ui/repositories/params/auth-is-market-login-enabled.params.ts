import { AuthIsMarketLoginEnabled$Params } from '../../../swagger/fn/auth/auth-is-market-login-enabled';

// @ts-ignore
export interface AuthIsMarketLoginEnabledParams {
}

export function authIsMarketLoginEnabledAdapter(params?: AuthIsMarketLoginEnabledParams): AuthIsMarketLoginEnabled$Params {
  if (!params) {
    return {} as AuthIsMarketLoginEnabled$Params;
  }
  return {
  };
}
