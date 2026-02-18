import { MarketJsonResultOfPriceListItem } from '../../models/market-json-result-of-price-list-item.interface';
import { ApiMarketJsonResultOfPriceListItem } from '../../../swagger/models/api-market-json-result-of-price-list-item';

export function adaptApiMarketJsonResultOfPriceListItem(source?: MarketJsonResultOfPriceListItem | null): ApiMarketJsonResultOfPriceListItem {
  return (source ?? {}) as ApiMarketJsonResultOfPriceListItem;
}
