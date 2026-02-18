import { ApiMarketJsonResultOfResetPasswordResult } from '../../../swagger/models/api-market-json-result-of-reset-password-result';
import { MarketJsonResultOfResetPasswordResult } from '../../models/market-json-result-of-reset-password-result.interface';

export function adaptMarketJsonResultOfResetPasswordResultToUI(source?: ApiMarketJsonResultOfResetPasswordResult | null): MarketJsonResultOfResetPasswordResult {
  return (source ?? {}) as MarketJsonResultOfResetPasswordResult;
}
