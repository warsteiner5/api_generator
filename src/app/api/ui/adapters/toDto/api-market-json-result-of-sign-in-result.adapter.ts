import { MarketJsonResultOfSignInResult } from '../../models/market-json-result-of-sign-in-result.interface';
import { ApiMarketJsonResultOfSignInResult } from '../../../swagger/models/api-market-json-result-of-sign-in-result';

export function adaptApiMarketJsonResultOfSignInResult(source?: MarketJsonResultOfSignInResult | null): ApiMarketJsonResultOfSignInResult {
  return (source ?? {}) as ApiMarketJsonResultOfSignInResult;
}
