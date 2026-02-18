import { MarketJsonResultOfNicRegistryTradeInfo } from '../../models/market-json-result-of-nic-registry-trade-info.interface';
import { ApiMarketJsonResultOfNicRegistryTradeInfoDto } from '../../../swagger/models/api-market-json-result-of-nic-registry-trade-info-dto';

export function adaptApiMarketJsonResultOfNicRegistryTradeInfoDto(source?: MarketJsonResultOfNicRegistryTradeInfo | null): ApiMarketJsonResultOfNicRegistryTradeInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfNicRegistryTradeInfoDto;
}
