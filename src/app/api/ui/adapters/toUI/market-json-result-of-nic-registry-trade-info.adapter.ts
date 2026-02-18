import { ApiMarketJsonResultOfNicRegistryTradeInfoDto } from '../../../swagger/models/api-market-json-result-of-nic-registry-trade-info-dto';
import { MarketJsonResultOfNicRegistryTradeInfo } from '../../models/market-json-result-of-nic-registry-trade-info.interface';

export function adaptMarketJsonResultOfNicRegistryTradeInfoToUI(source?: ApiMarketJsonResultOfNicRegistryTradeInfoDto | null): MarketJsonResultOfNicRegistryTradeInfo {
  return (source ?? {}) as MarketJsonResultOfNicRegistryTradeInfo;
}
