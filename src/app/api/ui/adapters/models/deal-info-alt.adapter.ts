import { ApiDealInfoAltDto } from '../../../swagger/models/api-deal-info';
import { DealInfoAlt } from '../../models/deal-info-alt.interface';
import { dealFormEnumAdapter } from '../enums/deal-form-enum.adapter';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';
import { dealStateEnumAdapter } from '../enums/deal-state-enum.adapter';

export const dealInfoAltAdapter = (source?: ApiDealInfoAltDto | null): DealInfoAlt => {
  return {
    conclusionDate: source?.ConclusionDate,
    customerId: source?.CustomerId,
    customerName: source?.CustomerName,
    dealForm: source?.DealForm === null ? undefined : dealFormEnumAdapter(source?.DealForm),
    dealFormName: source?.DealFormName,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    dealSignedOutsideEShop: source?.DealSignedOutsideEShop,
    dealState: source?.DealState === null ? undefined : dealStateEnumAdapter(source?.DealState),
    dealStateName: source?.DealStateName,
    dealSubject: source?.DealSubject,
    id: source?.Id,
    initialPrice: source?.InitialPrice,
    participantId: source?.ParticipantId,
    participantInn: source?.ParticipantInn,
    participantName: source?.ParticipantName,
    participantWarningMessage: source?.ParticipantWarningMessage,
    price: source?.Price,
    priceWarningMessage: source?.PriceWarningMessage,
    tradeNumber: source?.TradeNumber,
    tradeOrganizerName: source?.TradeOrganizerName,
  };
}
