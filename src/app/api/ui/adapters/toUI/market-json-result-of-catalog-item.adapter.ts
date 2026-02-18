import { ApiMarketJsonResultOfCatalogItemDto } from '../../../swagger/models/api-market-json-result-of-catalog-item-dto';
import { MarketJsonResultOfCatalogItem } from '../../models/market-json-result-of-catalog-item.interface';

export function adaptMarketJsonResultOfCatalogItemToUI(source?: ApiMarketJsonResultOfCatalogItemDto | null): MarketJsonResultOfCatalogItem {
  return (source ?? {}) as MarketJsonResultOfCatalogItem;
}
