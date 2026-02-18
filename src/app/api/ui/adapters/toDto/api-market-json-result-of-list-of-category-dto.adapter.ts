import { MarketJsonResultOfListOfCategory } from '../../models/market-json-result-of-list-of-category.interface';
import { ApiMarketJsonResultOfListOfCategoryDto } from '../../../swagger/models/api-market-json-result-of-list-of-category-dto';

export function adaptApiMarketJsonResultOfListOfCategoryDto(source?: MarketJsonResultOfListOfCategory | null): ApiMarketJsonResultOfListOfCategoryDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfCategoryDto;
}
