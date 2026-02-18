import { MarketJsonResultOfCategoryDtoOf } from '../../models/market-json-result-of-category-dto-of.interface';
import { ApiMarketJsonResultOfCategoryDtoOf } from '../../../swagger/models/api-market-json-result-of-category-dto-of';

export function adaptApiMarketJsonResultOfCategoryDtoOf(source?: MarketJsonResultOfCategoryDtoOf | null): ApiMarketJsonResultOfCategoryDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfCategoryDtoOf;
}
