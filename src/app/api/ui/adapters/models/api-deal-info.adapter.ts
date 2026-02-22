import { DealInfoAlt } from '../../models/deal-info-alt.interface';
import { ApiDealInfoAltDto } from '../../../swagger/models/api-deal-info';
import { apiDealFormEnumAdapter } from '../enums/api-deal-form-enum.adapter';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';
import { apiDealStateEnumAdapter } from '../enums/api-deal-state-enum.adapter';

export const apiDealInfoAltDtoAdapter = (source?: DealInfoAlt | null): ApiDealInfoAltDto => {
  return {
    ConclusionDate: source?.conclusionDate,
    CustomerId: source?.customerId,
    CustomerName: source?.customerName,
    DealForm: source?.dealForm === null ? undefined : apiDealFormEnumAdapter(source?.dealForm),
    DealFormName: source?.dealFormName,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    DealSignedOutsideEShop: source?.dealSignedOutsideEShop,
    DealState: source?.dealState === null ? undefined : apiDealStateEnumAdapter(source?.dealState),
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
