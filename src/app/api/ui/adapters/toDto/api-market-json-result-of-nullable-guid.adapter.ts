import { MarketJsonResultOfNullableGuid } from '../../models/market-json-result-of-nullable-guid.interface';
import { ApiMarketJsonResultOfNullableGuid } from '../../../swagger/models/api-market-json-result-of-nullable-guid';

export function adaptApiMarketJsonResultOfNullableGuid(source?: MarketJsonResultOfNullableGuid | null): ApiMarketJsonResultOfNullableGuid {
  return (source ?? {}) as ApiMarketJsonResultOfNullableGuid;
}
