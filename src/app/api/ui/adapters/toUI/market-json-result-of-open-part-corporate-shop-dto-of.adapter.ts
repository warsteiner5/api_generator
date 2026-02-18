import { ApiMarketJsonResultOfOpenPartCorporateShopDtoOf } from '../../../swagger/models/api-market-json-result-of-open-part-corporate-shop-dto-of';
import { MarketJsonResultOfOpenPartCorporateShopDtoOf } from '../../models/market-json-result-of-open-part-corporate-shop-dto-of.interface';

export function adaptMarketJsonResultOfOpenPartCorporateShopDtoOfToUI(source?: ApiMarketJsonResultOfOpenPartCorporateShopDtoOf | null): MarketJsonResultOfOpenPartCorporateShopDtoOf {
  return (source ?? {}) as MarketJsonResultOfOpenPartCorporateShopDtoOf;
}
