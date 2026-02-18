import { HmaoExternalDealInfo } from '../../models/hmao-external-deal-info.interface';
import { ApiHmaoExternalDealInfoDto } from '../../../swagger/models/api-hmao-external-deal-info-dto';
import { adaptApiDealStateEnum } from './api-deal-state-enum.adapter';

export function adaptApiHmaoExternalDealInfoDto(source?: HmaoExternalDealInfo | null): ApiHmaoExternalDealInfoDto {
  return {
    ConclusionDate: source?.conclusionDate,
    ContractSignDate: source?.contractSignDate,
    CustomerId: source?.customerId,
    CustomerName: source?.customerName,
    DealCustomNumber: source?.dealCustomNumber,
    DealState: adaptApiDealStateEnum(source?.dealState),
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
