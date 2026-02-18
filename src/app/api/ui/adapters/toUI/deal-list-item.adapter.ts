import { ApiDealListItemDto } from '../../../swagger/models/api-deal-list-item-dto';
import { DealListItem } from '../../models/deal-list-item.interface';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';
import { adaptPurchaseMethodTypeEnumToUI } from './purchase-method-type-enum.adapter';
import { adaptTradeBusinessFlowEnumToUI } from './trade-business-flow-enum.adapter';

export function adaptDealListItemToUI(source?: ApiDealListItemDto | null): DealListItem {
  return {
    additionalAgreementConclusionDate: source?.AdditionalAgreementConclusionDate ?? '',
    additionalAgreementStateId: source?.AdditionalAgreementStateId ?? 0,
    additionalAgreementStateName: source?.AdditionalAgreementStateName ?? '',
    businessFlowType: adaptTradeBusinessFlowEnumToUI(source?.BusinessFlowType),
    conclusionDate: source?.ConclusionDate ?? '',
    customDealNumber: source?.CustomDealNumber ?? '',
    customerGuid: source?.CustomerGuid ?? '',
    customerId: source?.CustomerId ?? 0,
    customerInn: source?.CustomerInn ?? '',
    customerName: source?.CustomerName ?? '',
    dealNumber: source?.DealNumber ?? '',
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    dealSignedOutsideEShop: source?.DealSignedOutsideEShop ?? false,
    dealStateId: source?.DealStateId ?? 0,
    dealStateName: source?.DealStateName ?? '',
    dealSubject: source?.DealSubject ?? '',
    deliveryPlace: source?.DeliveryPlace ?? '',
    id: source?.Id ?? 0,
    isExternal: source?.IsExternal ?? false,
    isNonElectronicForm: source?.IsNonElectronicForm ?? false,
    isPriceWithVat: source?.IsPriceWithVat ?? false,
    participantGuid: source?.ParticipantGuid ?? '',
    participantId: source?.ParticipantId ?? 0,
    participantInn: source?.ParticipantInn ?? '',
    participantName: source?.ParticipantName ?? '',
    price: source?.Price ?? 0,
    purchaseMethodType: adaptPurchaseMethodTypeEnumToUI(source?.PurchaseMethodType),
    signedOutOfEpReason: source?.SignedOutOfEpReason ?? '',
    startPrice: source?.StartPrice ?? 0,
    sumVat: source?.SumVat ?? 0,
    terminationReason: source?.TerminationReason ?? '',
    tradeId: source?.TradeId ?? 0,
    tradeLotStateId: source?.TradeLotStateId ?? 0,
    tradeLotStateName: source?.TradeLotStateName ?? '',
    tradeNumber: source?.TradeNumber ?? '',
    tradeOrganizerId: source?.TradeOrganizerId ?? 0,
    tradeOrganizerName: source?.TradeOrganizerName ?? '',
  };
}
