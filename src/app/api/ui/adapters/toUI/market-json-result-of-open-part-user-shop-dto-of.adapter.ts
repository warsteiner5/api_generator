import { ApiMarketJsonResultOfOpenPartUserShopDtoOf } from '../../../swagger/models/api-market-json-result-of-open-part-user-shop-dto-of';
import { MarketJsonResultOfOpenPartUserShopDtoOf } from '../../models/market-json-result-of-open-part-user-shop-dto-of.interface';

export function adaptMarketJsonResultOfOpenPartUserShopDtoOfToUI(source?: ApiMarketJsonResultOfOpenPartUserShopDtoOf | null): MarketJsonResultOfOpenPartUserShopDtoOf {
  return (source ?? {}) as MarketJsonResultOfOpenPartUserShopDtoOf;
}
