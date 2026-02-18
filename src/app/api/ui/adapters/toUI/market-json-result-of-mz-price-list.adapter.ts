import { ApiMarketJsonResultOfMzPriceListDto } from '../../../swagger/models/api-market-json-result-of-mz-price-list-dto';
import { MarketJsonResultOfMzPriceList } from '../../models/market-json-result-of-mz-price-list.interface';

export function adaptMarketJsonResultOfMzPriceListToUI(source?: ApiMarketJsonResultOfMzPriceListDto | null): MarketJsonResultOfMzPriceList {
  return (source ?? {}) as MarketJsonResultOfMzPriceList;
}
