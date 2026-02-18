import { DealListItem } from '../../models/deal-list-item.interface';
import { ApiDealListItemDto } from '../../../swagger/models/api-deal-list-item-dto';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';
import { adaptApiPurchaseMethodTypeEnum } from './api-purchase-method-type-enum.adapter';
import { adaptApiTradeBusinessFlowEnum } from './api-trade-business-flow-enum.adapter';

export function adaptApiDealListItemDto(source?: DealListItem | null): ApiDealListItemDto {
  return {
    AdditionalAgreementConclusionDate: source?.additionalAgreementConclusionDate,
    AdditionalAgreementStateId: source?.additionalAgreementStateId,
    AdditionalAgreementStateName: source?.additionalAgreementStateName,
    BusinessFlowType: adaptApiTradeBusinessFlowEnum(source?.businessFlowType),
    ConclusionDate: source?.conclusionDate,
    CustomDealNumber: source?.customDealNumber,
    CustomerGuid: source?.customerGuid,
    CustomerId: source?.customerId,
    CustomerInn: source?.customerInn,
    CustomerName: source?.customerName,
    DealNumber: source?.dealNumber,
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
    DealSignedOutsideEShop: source?.dealSignedOutsideEShop,
    DealStateId: source?.dealStateId,
    DealStateName: source?.dealStateName,
    DealSubject: source?.dealSubject,
    DeliveryPlace: source?.deliveryPlace,
    Id: source?.id,
    IsExternal: source?.isExternal,
    IsNonElectronicForm: source?.isNonElectronicForm,
    IsPriceWithVat: source?.isPriceWithVat,
    ParticipantGuid: source?.participantGuid,
    ParticipantId: source?.participantId,
    ParticipantInn: source?.participantInn,
    ParticipantName: source?.participantName,
    Price: source?.price,
    PurchaseMethodType: adaptApiPurchaseMethodTypeEnum(source?.purchaseMethodType),
    SignedOutOfEpReason: source?.signedOutOfEpReason,
    StartPrice: source?.startPrice,
    SumVat: source?.sumVat,
    TerminationReason: source?.terminationReason,
    TradeId: source?.tradeId,
    TradeLotStateId: source?.tradeLotStateId,
    TradeLotStateName: source?.tradeLotStateName,
    TradeNumber: source?.tradeNumber,
    TradeOrganizerId: source?.tradeOrganizerId,
    TradeOrganizerName: source?.tradeOrganizerName,
  };
}
