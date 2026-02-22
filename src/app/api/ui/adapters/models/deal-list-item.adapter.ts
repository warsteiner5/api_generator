import { ApiDealListItemDto } from '../../../swagger/models/api-deal-list-item-dto';
import { DealListItem } from '../../models/deal-list-item.interface';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';
import { purchaseMethodTypeEnumAdapter } from '../enums/purchase-method-type-enum.adapter';
import { tradeBusinessFlowEnumAdapter } from '../enums/trade-business-flow-enum.adapter';

export const dealListItemAdapter = (source?: ApiDealListItemDto | null): DealListItem => {
  return {
    additionalAgreementConclusionDate: source?.AdditionalAgreementConclusionDate,
    additionalAgreementStateId: source?.AdditionalAgreementStateId,
    additionalAgreementStateName: source?.AdditionalAgreementStateName,
    businessFlowType: source?.BusinessFlowType === null ? undefined : tradeBusinessFlowEnumAdapter(source?.BusinessFlowType),
    conclusionDate: source?.ConclusionDate,
    customDealNumber: source?.CustomDealNumber,
    customerGuid: source?.CustomerGuid,
    customerId: source?.CustomerId,
    customerInn: source?.CustomerInn,
    customerName: source?.CustomerName,
    dealNumber: source?.DealNumber,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    dealSignedOutsideEShop: source?.DealSignedOutsideEShop,
    dealStateId: source?.DealStateId,
    dealStateName: source?.DealStateName,
    dealSubject: source?.DealSubject,
    deliveryPlace: source?.DeliveryPlace,
    id: source?.Id,
    isExternal: source?.IsExternal,
    isNonElectronicForm: source?.IsNonElectronicForm,
    isPriceWithVat: source?.IsPriceWithVat,
    participantGuid: source?.ParticipantGuid,
    participantId: source?.ParticipantId,
    participantInn: source?.ParticipantInn,
    participantName: source?.ParticipantName,
    price: source?.Price,
    purchaseMethodType: source?.PurchaseMethodType === null ? undefined : purchaseMethodTypeEnumAdapter(source?.PurchaseMethodType),
    signedOutOfEpReason: source?.SignedOutOfEpReason,
    startPrice: source?.StartPrice,
    sumVat: source?.SumVat,
    terminationReason: source?.TerminationReason,
    tradeId: source?.TradeId,
    tradeLotStateId: source?.TradeLotStateId,
    tradeLotStateName: source?.TradeLotStateName,
    tradeNumber: source?.TradeNumber,
    tradeOrganizerId: source?.TradeOrganizerId,
    tradeOrganizerName: source?.TradeOrganizerName,
  };
}
