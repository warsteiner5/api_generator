import { ApiMarketJsonResultOfListOfCategoryDto } from '../../../swagger/models/api-market-json-result-of-list-of-category-dto';
import { MarketJsonResultOfListOfCategory } from '../../models/market-json-result-of-list-of-category.interface';

export function adaptMarketJsonResultOfListOfCategoryToUI(source?: ApiMarketJsonResultOfListOfCategoryDto | null): MarketJsonResultOfListOfCategory {
  return (source ?? {}) as MarketJsonResultOfListOfCategory;
}
