import { MarketJsonResultOfOrderFromCartCreatedInfo } from '../../models/market-json-result-of-order-from-cart-created-info.interface';
import { ApiMarketJsonResultOfOrderFromCartCreatedInfo } from '../../../swagger/models/api-market-json-result-of-order-from-cart-created-info';

export function adaptApiMarketJsonResultOfOrderFromCartCreatedInfo(source?: MarketJsonResultOfOrderFromCartCreatedInfo | null): ApiMarketJsonResultOfOrderFromCartCreatedInfo {
  return (source ?? {}) as ApiMarketJsonResultOfOrderFromCartCreatedInfo;
}
