import { ApiMarketJsonResultOfPublishApplicationResult } from '../../../swagger/models/api-market-json-result-of-publish-application-result';
import { MarketJsonResultOfPublishApplicationResult } from '../../models/market-json-result-of-publish-application-result.interface';

export function adaptMarketJsonResultOfPublishApplicationResultToUI(source?: ApiMarketJsonResultOfPublishApplicationResult | null): MarketJsonResultOfPublishApplicationResult {
  return (source ?? {}) as MarketJsonResultOfPublishApplicationResult;
}
