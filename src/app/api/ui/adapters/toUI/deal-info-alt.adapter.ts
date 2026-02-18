import { ApiDealInfoAltDto } from '../../../swagger/models/api-deal-info';
import { DealInfoAlt } from '../../models/deal-info-alt.interface';
import { adaptDealFormEnumToUI } from './deal-form-enum.adapter';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';
import { adaptDealStateEnumToUI } from './deal-state-enum.adapter';

export function adaptDealInfoAltToUI(source?: ApiDealInfoAltDto | null): DealInfoAlt {
  return {
    conclusionDate: source?.ConclusionDate ?? '',
    customerId: source?.CustomerId ?? 0,
    customerName: source?.CustomerName ?? '',
    dealForm: adaptDealFormEnumToUI(source?.DealForm),
    dealFormName: source?.DealFormName ?? '',
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    dealSignedOutsideEShop: source?.DealSignedOutsideEShop ?? false,
    dealState: adaptDealStateEnumToUI(source?.DealState),
    dealStateName: source?.DealStateName ?? '',
    dealSubject: source?.DealSubject ?? '',
    id: source?.Id ?? 0,
    initialPrice: source?.InitialPrice ?? 0,
    participantId: source?.ParticipantId ?? 0,
    participantInn: source?.ParticipantInn ?? '',
    participantName: source?.ParticipantName ?? '',
    participantWarningMessage: source?.ParticipantWarningMessage ?? '',
    price: source?.Price ?? 0,
    priceWarningMessage: source?.PriceWarningMessage ?? '',
    tradeNumber: source?.TradeNumber ?? 0,
    tradeOrganizerName: source?.TradeOrganizerName ?? '',
  };
}
