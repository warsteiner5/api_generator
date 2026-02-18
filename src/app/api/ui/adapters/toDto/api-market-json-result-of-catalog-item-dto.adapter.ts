import { MarketJsonResultOfCatalogItem } from '../../models/market-json-result-of-catalog-item.interface';
import { ApiMarketJsonResultOfCatalogItemDto } from '../../../swagger/models/api-market-json-result-of-catalog-item-dto';

export function adaptApiMarketJsonResultOfCatalogItemDto(source?: MarketJsonResultOfCatalogItem | null): ApiMarketJsonResultOfCatalogItemDto {
  return (source ?? {}) as ApiMarketJsonResultOfCatalogItemDto;
}
