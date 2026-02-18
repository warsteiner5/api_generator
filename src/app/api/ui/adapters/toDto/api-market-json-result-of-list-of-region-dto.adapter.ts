import { MarketJsonResultOfListOfRegion } from '../../models/market-json-result-of-list-of-region.interface';
import { ApiMarketJsonResultOfListOfRegionDto } from '../../../swagger/models/api-market-json-result-of-list-of-region-dto';

export function adaptApiMarketJsonResultOfListOfRegionDto(source?: MarketJsonResultOfListOfRegion | null): ApiMarketJsonResultOfListOfRegionDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfRegionDto;
}
