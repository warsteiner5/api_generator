import { ApiMarketJsonResultOfOpenPartDistrictDtoOf } from '../../../swagger/models/api-market-json-result-of-open-part-district-dto-of';
import { MarketJsonResultOfOpenPartDistrictDtoOf } from '../../models/market-json-result-of-open-part-district-dto-of.interface';

export function adaptMarketJsonResultOfOpenPartDistrictDtoOfToUI(source?: ApiMarketJsonResultOfOpenPartDistrictDtoOf | null): MarketJsonResultOfOpenPartDistrictDtoOf {
  return (source ?? {}) as MarketJsonResultOfOpenPartDistrictDtoOf;
}
