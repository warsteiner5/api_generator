import { ApiMarketJsonResultOfGuid } from '../../../swagger/models/api-market-json-result-of-guid';
import { MarketJsonResultOfGuid } from '../../models/market-json-result-of-guid.interface';

export function adaptMarketJsonResultOfGuidToUI(source?: ApiMarketJsonResultOfGuid | null): MarketJsonResultOfGuid {
  return (source ?? {}) as MarketJsonResultOfGuid;
}
