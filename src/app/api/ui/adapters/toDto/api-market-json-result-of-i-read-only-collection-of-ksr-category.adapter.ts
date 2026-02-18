import { MarketJsonResultOfIReadOnlyCollectionOfKsrCategory } from '../../models/market-json-result-of-i-read-only-collection-of-ksr-category.interface';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategory } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-ksr-category';

export function adaptApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategory(source?: MarketJsonResultOfIReadOnlyCollectionOfKsrCategory | null): ApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategory {
  return (source ?? {}) as ApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategory;
}
