import { MarketJsonResultOfResetPasswordResult } from '../../models/market-json-result-of-reset-password-result.interface';
import { ApiMarketJsonResultOfResetPasswordResult } from '../../../swagger/models/api-market-json-result-of-reset-password-result';

export function adaptApiMarketJsonResultOfResetPasswordResult(source?: MarketJsonResultOfResetPasswordResult | null): ApiMarketJsonResultOfResetPasswordResult {
  return (source ?? {}) as ApiMarketJsonResultOfResetPasswordResult;
}
