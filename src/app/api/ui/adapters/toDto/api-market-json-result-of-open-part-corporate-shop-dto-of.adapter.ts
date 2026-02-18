import { MarketJsonResultOfOpenPartCorporateShopDtoOf } from '../../models/market-json-result-of-open-part-corporate-shop-dto-of.interface';
import { ApiMarketJsonResultOfOpenPartCorporateShopDtoOf } from '../../../swagger/models/api-market-json-result-of-open-part-corporate-shop-dto-of';

export function adaptApiMarketJsonResultOfOpenPartCorporateShopDtoOf(source?: MarketJsonResultOfOpenPartCorporateShopDtoOf | null): ApiMarketJsonResultOfOpenPartCorporateShopDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfOpenPartCorporateShopDtoOf;
}
