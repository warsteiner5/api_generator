import { ApiMarketJsonResultOfCategoryDtoOf } from '../../../swagger/models/api-market-json-result-of-category-dto-of';
import { MarketJsonResultOfCategoryDtoOf } from '../../models/market-json-result-of-category-dto-of.interface';

export function adaptMarketJsonResultOfCategoryDtoOfToUI(source?: ApiMarketJsonResultOfCategoryDtoOf | null): MarketJsonResultOfCategoryDtoOf {
  return (source ?? {}) as MarketJsonResultOfCategoryDtoOf;
}
