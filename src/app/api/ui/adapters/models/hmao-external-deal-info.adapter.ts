import { ApiHmaoExternalDealInfoDto } from '../../../swagger/models/api-hmao-external-deal-info-dto';
import { HmaoExternalDealInfo } from '../../models/hmao-external-deal-info.interface';
import { dealStateEnumAdapter } from '../enums/deal-state-enum.adapter';

export const hmaoExternalDealInfoAdapter = (source?: ApiHmaoExternalDealInfoDto | null): HmaoExternalDealInfo => {
  return {
    conclusionDate: source?.ConclusionDate,
    contractSignDate: source?.ContractSignDate,
    customerId: source?.CustomerId,
    customerName: source?.CustomerName,
    dealCustomNumber: source?.DealCustomNumber,
    dealState: source?.DealState === null ? undefined : dealStateEnumAdapter(source?.DealState),
    dealStateString: source?.DealStateString,
    id: source?.Id,
    isNonElectronicForm: source?.IsNonElectronicForm,
    participantId: source?.ParticipantId,
    participantName: source?.ParticipantName,
    price: source?.Price,
    signByProviderDate: source?.SignByProviderDate,
    tradeId: source?.TradeId,
    tradeName: source?.TradeName,
    tradeOrganizerName: source?.TradeOrganizerName,
  };
}
