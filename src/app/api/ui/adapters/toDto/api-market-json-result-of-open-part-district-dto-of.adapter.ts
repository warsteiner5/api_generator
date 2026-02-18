import { MarketJsonResultOfOpenPartDistrictDtoOf } from '../../models/market-json-result-of-open-part-district-dto-of.interface';
import { ApiMarketJsonResultOfOpenPartDistrictDtoOf } from '../../../swagger/models/api-market-json-result-of-open-part-district-dto-of';

export function adaptApiMarketJsonResultOfOpenPartDistrictDtoOf(source?: MarketJsonResultOfOpenPartDistrictDtoOf | null): ApiMarketJsonResultOfOpenPartDistrictDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfOpenPartDistrictDtoOf;
}
