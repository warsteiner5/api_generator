import { AuthIsMarketLoginEnabled$Params } from '../../../swagger/fn/auth/auth-is-market-login-enabled';

export interface AuthIsMarketLoginEnabledParams {
}

export const authIsMarketLoginEnabledParamsAdapter = {
  adapt(params?: AuthIsMarketLoginEnabledParams): AuthIsMarketLoginEnabled$Params {
    if (!params) {
      return {} as AuthIsMarketLoginEnabled$Params;
    }
    return {
    };
  }
};
