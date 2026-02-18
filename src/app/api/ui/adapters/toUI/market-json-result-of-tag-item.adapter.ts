import { ApiMarketJsonResultOfTagItem } from '../../../swagger/models/api-market-json-result-of-tag-item';
import { MarketJsonResultOfTagItem } from '../../models/market-json-result-of-tag-item.interface';

export function adaptMarketJsonResultOfTagItemToUI(source?: ApiMarketJsonResultOfTagItem | null): MarketJsonResultOfTagItem {
  return (source ?? {}) as MarketJsonResultOfTagItem;
}
