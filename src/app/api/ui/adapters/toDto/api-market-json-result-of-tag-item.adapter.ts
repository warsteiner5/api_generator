import { MarketJsonResultOfTagItem } from '../../models/market-json-result-of-tag-item.interface';
import { ApiMarketJsonResultOfTagItem } from '../../../swagger/models/api-market-json-result-of-tag-item';

export function adaptApiMarketJsonResultOfTagItem(source?: MarketJsonResultOfTagItem | null): ApiMarketJsonResultOfTagItem {
  return (source ?? {}) as ApiMarketJsonResultOfTagItem;
}
