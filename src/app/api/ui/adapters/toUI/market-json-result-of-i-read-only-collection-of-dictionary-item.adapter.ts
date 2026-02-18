import { ApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItem } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-dictionary-item';
import { MarketJsonResultOfIReadOnlyCollectionOfDictionaryItem } from '../../models/market-json-result-of-i-read-only-collection-of-dictionary-item.interface';

export function adaptMarketJsonResultOfIReadOnlyCollectionOfDictionaryItemToUI(source?: ApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItem | null): MarketJsonResultOfIReadOnlyCollectionOfDictionaryItem {
  return (source ?? {}) as MarketJsonResultOfIReadOnlyCollectionOfDictionaryItem;
}
