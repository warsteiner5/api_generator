import { MarketJsonResultOfForgotPasswordResult } from '../../models/market-json-result-of-forgot-password-result.interface';
import { ApiMarketJsonResultOfForgotPasswordResult } from '../../../swagger/models/api-market-json-result-of-forgot-password-result';

export function adaptApiMarketJsonResultOfForgotPasswordResult(source?: MarketJsonResultOfForgotPasswordResult | null): ApiMarketJsonResultOfForgotPasswordResult {
  return (source ?? {}) as ApiMarketJsonResultOfForgotPasswordResult;
}
