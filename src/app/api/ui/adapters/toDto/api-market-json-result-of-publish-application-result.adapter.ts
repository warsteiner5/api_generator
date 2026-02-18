import { MarketJsonResultOfPublishApplicationResult } from '../../models/market-json-result-of-publish-application-result.interface';
import { ApiMarketJsonResultOfPublishApplicationResult } from '../../../swagger/models/api-market-json-result-of-publish-application-result';

export function adaptApiMarketJsonResultOfPublishApplicationResult(source?: MarketJsonResultOfPublishApplicationResult | null): ApiMarketJsonResultOfPublishApplicationResult {
  return (source ?? {}) as ApiMarketJsonResultOfPublishApplicationResult;
}
