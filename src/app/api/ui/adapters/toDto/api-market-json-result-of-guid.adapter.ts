import { MarketJsonResultOfGuid } from '../../models/market-json-result-of-guid.interface';
import { ApiMarketJsonResultOfGuid } from '../../../swagger/models/api-market-json-result-of-guid';

export function adaptApiMarketJsonResultOfGuid(source?: MarketJsonResultOfGuid | null): ApiMarketJsonResultOfGuid {
  return (source ?? {}) as ApiMarketJsonResultOfGuid;
}
