import { ApiMarketJsonResultOfNullableGuid } from '../../../swagger/models/api-market-json-result-of-nullable-guid';
import { MarketJsonResultOfNullableGuid } from '../../models/market-json-result-of-nullable-guid.interface';

export function adaptMarketJsonResultOfNullableGuidToUI(source?: ApiMarketJsonResultOfNullableGuid | null): MarketJsonResultOfNullableGuid {
  return (source ?? {}) as MarketJsonResultOfNullableGuid;
}
