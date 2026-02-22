import { NicRegistryTradeInfo } from '../../models/nic-registry-trade-info.interface';
import { ApiNicRegistryTradeInfoDto } from '../../../swagger/models/api-nic-registry-trade-info-dto';
import { apiNicRegistryParticipantInfoDtoAdapter } from './api-nic-registry-participant-info-dto.adapter';

export const apiNicRegistryTradeInfoDtoAdapter = (source?: NicRegistryTradeInfo | null): ApiNicRegistryTradeInfoDto => {
  return {
    CustomerInn: source?.customerInn,
    CustomerKpp: source?.customerKpp,
    CustomerName: source?.customerName,
    TenantName: source?.tenantName,
    TradeId: source?.tradeId,
    TradeName: source?.tradeName,
    Winners: source?.winners?.map((item) => apiNicRegistryParticipantInfoDtoAdapter(item)),
  };
}
