import { MarketJsonResultOfIReadOnlyCollectionOfDictionaryItem } from '../../models/market-json-result-of-i-read-only-collection-of-dictionary-item.interface';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItem } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-dictionary-item';

export function adaptApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItem(source?: MarketJsonResultOfIReadOnlyCollectionOfDictionaryItem | null): ApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItem {
  return (source ?? {}) as ApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItem;
}
