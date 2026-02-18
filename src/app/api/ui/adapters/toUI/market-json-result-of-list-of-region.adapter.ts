import { ApiMarketJsonResultOfListOfRegionDto } from '../../../swagger/models/api-market-json-result-of-list-of-region-dto';
import { MarketJsonResultOfListOfRegion } from '../../models/market-json-result-of-list-of-region.interface';

export function adaptMarketJsonResultOfListOfRegionToUI(source?: ApiMarketJsonResultOfListOfRegionDto | null): MarketJsonResultOfListOfRegion {
  return (source ?? {}) as MarketJsonResultOfListOfRegion;
}
