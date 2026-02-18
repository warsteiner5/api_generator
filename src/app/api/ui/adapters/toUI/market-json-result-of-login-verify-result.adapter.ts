import { ApiMarketJsonResultOfLoginVerifyResult } from '../../../swagger/models/api-market-json-result-of-login-verify-result';
import { MarketJsonResultOfLoginVerifyResult } from '../../models/market-json-result-of-login-verify-result.interface';

export function adaptMarketJsonResultOfLoginVerifyResultToUI(source?: ApiMarketJsonResultOfLoginVerifyResult | null): MarketJsonResultOfLoginVerifyResult {
  return (source ?? {}) as MarketJsonResultOfLoginVerifyResult;
}
