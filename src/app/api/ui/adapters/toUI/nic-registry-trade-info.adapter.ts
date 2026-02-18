import { ApiNicRegistryTradeInfoDto } from '../../../swagger/models/api-nic-registry-trade-info-dto';
import { NicRegistryTradeInfo } from '../../models/nic-registry-trade-info.interface';
import { adaptNicRegistryParticipantInfoToUI } from './nic-registry-participant-info.adapter';

export function adaptNicRegistryTradeInfoToUI(source?: ApiNicRegistryTradeInfoDto | null): NicRegistryTradeInfo {
  return {
    customerInn: source?.CustomerInn ?? '',
    customerKpp: source?.CustomerKpp ?? '',
    customerName: source?.CustomerName ?? '',
    tenantName: source?.TenantName ?? '',
    tradeId: source?.TradeId ?? 0,
    tradeName: source?.TradeName ?? '',
    winners: (source?.Winners ?? []).map((item) => adaptNicRegistryParticipantInfoToUI(item)),
  };
}
