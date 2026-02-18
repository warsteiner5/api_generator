import { MarketJsonResultOfCategoryWithChildren } from '../../models/market-json-result-of-category-with-children.interface';
import { ApiMarketJsonResultOfCategoryWithChildrenDto } from '../../../swagger/models/api-market-json-result-of-category-with-children-dto';

export function adaptApiMarketJsonResultOfCategoryWithChildrenDto(source?: MarketJsonResultOfCategoryWithChildren | null): ApiMarketJsonResultOfCategoryWithChildrenDto {
  return (source ?? {}) as ApiMarketJsonResultOfCategoryWithChildrenDto;
}
