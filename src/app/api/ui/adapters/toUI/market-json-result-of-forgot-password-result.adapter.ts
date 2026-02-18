import { ApiMarketJsonResultOfForgotPasswordResult } from '../../../swagger/models/api-market-json-result-of-forgot-password-result';
import { MarketJsonResultOfForgotPasswordResult } from '../../models/market-json-result-of-forgot-password-result.interface';

export function adaptMarketJsonResultOfForgotPasswordResultToUI(source?: ApiMarketJsonResultOfForgotPasswordResult | null): MarketJsonResultOfForgotPasswordResult {
  return (source ?? {}) as MarketJsonResultOfForgotPasswordResult;
}
