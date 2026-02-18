import { ApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategory } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-ksr-category';
import { MarketJsonResultOfIReadOnlyCollectionOfKsrCategory } from '../../models/market-json-result-of-i-read-only-collection-of-ksr-category.interface';

export function adaptMarketJsonResultOfIReadOnlyCollectionOfKsrCategoryToUI(source?: ApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategory | null): MarketJsonResultOfIReadOnlyCollectionOfKsrCategory {
  return (source ?? {}) as MarketJsonResultOfIReadOnlyCollectionOfKsrCategory;
}
