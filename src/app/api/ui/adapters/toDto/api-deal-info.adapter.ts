import { DealInfoAlt } from '../../models/deal-info-alt.interface';
import { ApiDealInfoAltDto } from '../../../swagger/models/api-deal-info';
import { adaptApiDealFormEnum } from './api-deal-form-enum.adapter';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';
import { adaptApiDealStateEnum } from './api-deal-state-enum.adapter';

export function adaptApiDealInfoAltDto(source?: DealInfoAlt | null): ApiDealInfoAltDto {
  return {
    ConclusionDate: source?.conclusionDate,
    CustomerId: source?.customerId,
    CustomerName: source?.customerName,
    DealForm: adaptApiDealFormEnum(source?.dealForm),
    DealFormName: source?.dealFormName,
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
    DealSignedOutsideEShop: source?.dealSignedOutsideEShop,
    DealState: adaptApiDealStateEnum(source?.dealState),
    DealStateName: source?.dealStateName,
    DealSubject: source?.dealSubject,
    Id: source?.id,
    InitialPrice: source?.initialPrice,
    ParticipantId: source?.participantId,
    ParticipantInn: source?.participantInn,
    ParticipantName: source?.participantName,
    ParticipantWarningMessage: source?.participantWarningMessage,
    Price: source?.price,
    PriceWarningMessage: source?.priceWarningMessage,
    TradeNumber: source?.tradeNumber,
    TradeOrganizerName: source?.tradeOrganizerName,
  };
}
