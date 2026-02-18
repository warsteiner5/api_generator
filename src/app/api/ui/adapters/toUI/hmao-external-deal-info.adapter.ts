import { ApiHmaoExternalDealInfoDto } from '../../../swagger/models/api-hmao-external-deal-info-dto';
import { HmaoExternalDealInfo } from '../../models/hmao-external-deal-info.interface';
import { adaptDealStateEnumToUI } from './deal-state-enum.adapter';

export function adaptHmaoExternalDealInfoToUI(source?: ApiHmaoExternalDealInfoDto | null): HmaoExternalDealInfo {
  return {
    conclusionDate: source?.ConclusionDate ?? '',
    contractSignDate: source?.ContractSignDate ?? '',
    customerId: source?.CustomerId ?? 0,
    customerName: source?.CustomerName ?? '',
    dealCustomNumber: source?.DealCustomNumber ?? '',
    dealState: adaptDealStateEnumToUI(source?.DealState),
    dealStateString: source?.DealStateString ?? '',
    id: source?.Id ?? 0,
    isNonElectronicForm: source?.IsNonElectronicForm ?? false,
    participantId: source?.ParticipantId ?? 0,
    participantName: source?.ParticipantName ?? '',
    price: source?.Price ?? 0,
    signByProviderDate: source?.SignByProviderDate ?? '',
    tradeId: source?.TradeId ?? 0,
    tradeName: source?.TradeName ?? '',
    tradeOrganizerName: source?.TradeOrganizerName ?? '',
  };
}
