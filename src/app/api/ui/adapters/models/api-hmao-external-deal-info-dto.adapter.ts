import { HmaoExternalDealInfo } from '../../models/hmao-external-deal-info.interface';
import { ApiHmaoExternalDealInfoDto } from '../../../swagger/models/api-hmao-external-deal-info-dto';
import { apiDealStateEnumAdapter } from '../enums/api-deal-state-enum.adapter';

export const apiHmaoExternalDealInfoDtoAdapter = (source?: HmaoExternalDealInfo | null): ApiHmaoExternalDealInfoDto => {
  return {
    ConclusionDate: source?.conclusionDate,
    ContractSignDate: source?.contractSignDate,
    CustomerId: source?.customerId,
    CustomerName: source?.customerName,
    DealCustomNumber: source?.dealCustomNumber,
    DealState: source?.dealState === null ? undefined : apiDealStateEnumAdapter(source?.dealState),
    DealStateString: source?.dealStateString,
    Id: source?.id,
    IsNonElectronicForm: source?.isNonElectronicForm,
    ParticipantId: source?.participantId,
    ParticipantName: source?.participantName,
    Price: source?.price,
    SignByProviderDate: source?.signByProviderDate,
    TradeId: source?.tradeId,
    TradeName: source?.tradeName,
    TradeOrganizerName: source?.tradeOrganizerName,
  };
}
