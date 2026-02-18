import { ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-eis-dictionary-item';
import { MarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem } from '../../models/market-json-result-of-i-read-only-collection-of-eis-dictionary-item.interface';

export function adaptMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItemToUI(source?: ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem | null): MarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem {
  return (source ?? {}) as MarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItem;
}
