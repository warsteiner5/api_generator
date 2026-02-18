import { ApiMarketJsonResultOfOrderFromCartCreatedInfo } from '../../../swagger/models/api-market-json-result-of-order-from-cart-created-info';
import { MarketJsonResultOfOrderFromCartCreatedInfo } from '../../models/market-json-result-of-order-from-cart-created-info.interface';

export function adaptMarketJsonResultOfOrderFromCartCreatedInfoToUI(source?: ApiMarketJsonResultOfOrderFromCartCreatedInfo | null): MarketJsonResultOfOrderFromCartCreatedInfo {
  return (source ?? {}) as MarketJsonResultOfOrderFromCartCreatedInfo;
}
