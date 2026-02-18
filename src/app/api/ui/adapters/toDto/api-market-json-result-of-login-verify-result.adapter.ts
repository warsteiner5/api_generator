import { MarketJsonResultOfLoginVerifyResult } from '../../models/market-json-result-of-login-verify-result.interface';
import { ApiMarketJsonResultOfLoginVerifyResult } from '../../../swagger/models/api-market-json-result-of-login-verify-result';

export function adaptApiMarketJsonResultOfLoginVerifyResult(source?: MarketJsonResultOfLoginVerifyResult | null): ApiMarketJsonResultOfLoginVerifyResult {
  return (source ?? {}) as ApiMarketJsonResultOfLoginVerifyResult;
}
