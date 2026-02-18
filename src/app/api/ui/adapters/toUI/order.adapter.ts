import { ApiOrderDto } from '../../../swagger/models/api-order-dto';
import { Order } from '../../models/order.interface';
import { adaptAdditionalRequirementToUI } from './additional-requirement.adapter';
import { adaptCustomerContactInfoAltToUI } from './customer-contact-info-alt.adapter';
import { adaptDeliveryMethodAltEnumToUI } from './delivery-method-alt-enum.adapter';
import { adaptFederalLawLimitAltEnumToUI } from './federal-law-limit-alt-enum.adapter';
import { adaptOrderDetailToUI } from './order-detail.adapter';
import { adaptOrderDocumentToUI } from './order-document.adapter';
import { adaptOrderStateEnumToUI } from './order-state-enum.adapter';
import { adaptTradeBusinessFlowEnumToUI } from './trade-business-flow-enum.adapter';
import { adaptTradeExtCustomerInfoExcelToUI } from './trade-ext-customer-info-excel.adapter';
import { adaptZmoFinanceSourceEnumToUI } from './zmo-finance-source-enum.adapter';

export function adaptOrderToUI(source?: ApiOrderDto | null): Order {
  return {
    additionalRequirements: (source?.AdditionalRequirements ?? []).map((item) => adaptAdditionalRequirementToUI(item)),
    businessFlowType: adaptTradeBusinessFlowEnumToUI(source?.BusinessFlowType),
    comment: source?.Comment ?? '',
    contactInfo: adaptCustomerContactInfoAltToUI(source?.ContactInfo),
    creatorUserId: source?.CreatorUserId ?? 0,
    currencyCode: source?.CurrencyCode ?? '',
    customerId: source?.CustomerId ?? '',
    dealConclusionTermInfo: source?.DealConclusionTermInfo ?? '',
    deliveryMethod: adaptDeliveryMethodAltEnumToUI(source?.DeliveryMethod),
    deliveryPlace: source?.DeliveryPlace ?? '',
    deliveryTerms: source?.DeliveryTerms ?? '',
    description: source?.Description ?? '',
    externalSystemId: source?.ExternalSystemId ?? 0,
    federalLawLimit: adaptFederalLawLimitAltEnumToUI(source?.FederalLawLimit),
    id: source?.Id ?? 0,
    initialPrice: source?.InitialPrice ?? 0,
    isAutoCompleteDeal: source?.IsAutoCompleteDeal ?? false,
    isBasedOnPublicOffer: source?.IsBasedOnPublicOffer ?? false,
    isCartOrder: source?.IsCartOrder ?? false,
    isContractInElectronicForm: source?.IsContractInElectronicForm ?? false,
    isCustomPrice: source?.IsCustomPrice ?? false,
    isFederalLawsEnable: source?.IsFederalLawsEnable ?? false,
    isParentContractNumberNotSpecified: source?.IsParentContractNumberNotSpecified ?? false,
    isParticipantCanCreateDeal: source?.IsParticipantCanCreateDeal ?? false,
    isSanctionedPurchase: source?.IsSanctionedPurchase ?? false,
    isUnitBidding: source?.IsUnitBidding ?? false,
    keepGuaranteeForAllParticipants: source?.KeepGuaranteeForAllParticipants ?? false,
    keepGuaranteeForParticipantsCount: source?.KeepGuaranteeForParticipantsCount ?? 0,
    lastModificationDate: source?.LastModificationDate ?? '',
    maxDealPrice: source?.MaxDealPrice ?? 0,
    orderDetails: (source?.OrderDetails ?? []).map((item) => adaptOrderDetailToUI(item)),
    orderDocuments: (source?.OrderDocuments ?? []).map((item) => adaptOrderDocumentToUI(item)),
    orderName: source?.OrderName ?? '',
    orderState: adaptOrderStateEnumToUI(source?.OrderState),
    parentContractNumber: source?.ParentContractNumber ?? '',
    parentNotTookPlaceTradeId: source?.ParentNotTookPlaceTradeId ?? 0,
    participantComment: source?.ParticipantComment ?? '',
    participantId: source?.ParticipantId ?? '',
    planedDealSignDate: source?.PlanedDealSignDate ?? '',
    possibleSendByTransportCompany: source?.PossibleSendByTransportCompany ?? false,
    regionCode: source?.RegionCode ?? '',
    tradeExtCustomerInfo: adaptTradeExtCustomerInfoExcelToUI(source?.TradeExtCustomerInfo),
    tradeIdentificationCode: source?.TradeIdentificationCode ?? '',
    zmoFinanceSource: adaptZmoFinanceSourceEnumToUI(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType ?? 0,
  };
}
