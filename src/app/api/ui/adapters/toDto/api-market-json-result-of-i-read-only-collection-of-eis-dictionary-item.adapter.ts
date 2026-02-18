import { MarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem } from '../../models/market-json-result-of-i-read-only-collection-of-eis-dictionary-item.interface';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-eis-dictionary-item';

export function adaptApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem(source?: MarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem | null): ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem {
  return (source ?? {}) as ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem;
}
