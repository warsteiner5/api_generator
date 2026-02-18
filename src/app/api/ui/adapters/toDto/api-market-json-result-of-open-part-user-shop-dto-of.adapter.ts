import { MarketJsonResultOfOpenPartUserShopDtoOf } from '../../models/market-json-result-of-open-part-user-shop-dto-of.interface';
import { ApiMarketJsonResultOfOpenPartUserShopDtoOf } from '../../../swagger/models/api-market-json-result-of-open-part-user-shop-dto-of';

export function adaptApiMarketJsonResultOfOpenPartUserShopDtoOf(source?: MarketJsonResultOfOpenPartUserShopDtoOf | null): ApiMarketJsonResultOfOpenPartUserShopDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfOpenPartUserShopDtoOf;
}
