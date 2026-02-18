import { ApiMarketJsonResultOfCategoryWithChildrenDto } from '../../../swagger/models/api-market-json-result-of-category-with-children-dto';
import { MarketJsonResultOfCategoryWithChildren } from '../../models/market-json-result-of-category-with-children.interface';

export function adaptMarketJsonResultOfCategoryWithChildrenToUI(source?: ApiMarketJsonResultOfCategoryWithChildrenDto | null): MarketJsonResultOfCategoryWithChildren {
  return (source ?? {}) as MarketJsonResultOfCategoryWithChildren;
}
