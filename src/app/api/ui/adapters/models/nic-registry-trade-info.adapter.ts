import { ApiNicRegistryTradeInfoDto } from '../../../swagger/models/api-nic-registry-trade-info-dto';
import { NicRegistryTradeInfo } from '../../models/nic-registry-trade-info.interface';
import { nicRegistryParticipantInfoAdapter } from './nic-registry-participant-info.adapter';

export const nicRegistryTradeInfoAdapter = (source?: ApiNicRegistryTradeInfoDto | null): NicRegistryTradeInfo => {
  return {
    customerInn: source?.CustomerInn,
    customerKpp: source?.CustomerKpp,
    customerName: source?.CustomerName,
    tenantName: source?.TenantName,
    tradeId: source?.TradeId,
    tradeName: source?.TradeName,
    winners: source?.Winners?.map((item) => nicRegistryParticipantInfoAdapter(item)),
  };
}
