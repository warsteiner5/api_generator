import { ApiMarketJsonResultOfPriceListItem } from '../../../swagger/models/api-market-json-result-of-price-list-item';
import { MarketJsonResultOfPriceListItem } from '../../models/market-json-result-of-price-list-item.interface';

export function adaptMarketJsonResultOfPriceListItemToUI(source?: ApiMarketJsonResultOfPriceListItem | null): MarketJsonResultOfPriceListItem {
  return (source ?? {}) as MarketJsonResultOfPriceListItem;
}
