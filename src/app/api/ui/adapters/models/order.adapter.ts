import { ApiOrderDto } from '../../../swagger/models/api-order-dto';
import { Order } from '../../models/order.interface';
import { additionalRequirementAdapter } from './additional-requirement.adapter';
import { customerContactInfoAltAdapter } from './customer-contact-info-alt.adapter';
import { deliveryMethodAltEnumAdapter } from '../enums/delivery-method-alt-enum.adapter';
import { federalLawLimitAltEnumAdapter } from '../enums/federal-law-limit-alt-enum.adapter';
import { orderDetailAdapter } from './order-detail.adapter';
import { orderDocumentAdapter } from './order-document.adapter';
import { orderStateEnumAdapter } from '../enums/order-state-enum.adapter';
import { tradeBusinessFlowEnumAdapter } from '../enums/trade-business-flow-enum.adapter';
import { tradeExtCustomerInfoExcelAdapter } from './trade-ext-customer-info-excel.adapter';
import { zmoFinanceSourceEnumAdapter } from '../enums/zmo-finance-source-enum.adapter';

export const orderAdapter = (source?: ApiOrderDto | null): Order => {
  return {
    additionalRequirements: source?.AdditionalRequirements?.map((item) => additionalRequirementAdapter(item)),
    businessFlowType: source?.BusinessFlowType === null ? undefined : tradeBusinessFlowEnumAdapter(source?.BusinessFlowType),
    comment: source?.Comment,
    contactInfo: source?.ContactInfo === null ? undefined : customerContactInfoAltAdapter(source?.ContactInfo),
    creatorUserId: source?.CreatorUserId,
    currencyCode: source?.CurrencyCode,
    customerId: source?.CustomerId,
    dealConclusionTermInfo: source?.DealConclusionTermInfo,
    deliveryMethod: source?.DeliveryMethod === null ? undefined : deliveryMethodAltEnumAdapter(source?.DeliveryMethod),
    deliveryPlace: source?.DeliveryPlace,
    deliveryTerms: source?.DeliveryTerms,
    description: source?.Description,
    externalSystemId: source?.ExternalSystemId,
    federalLawLimit: source?.FederalLawLimit === null ? undefined : federalLawLimitAltEnumAdapter(source?.FederalLawLimit),
    id: source?.Id,
    initialPrice: source?.InitialPrice,
    isAutoCompleteDeal: source?.IsAutoCompleteDeal,
    isBasedOnPublicOffer: source?.IsBasedOnPublicOffer,
    isCartOrder: source?.IsCartOrder,
    isContractInElectronicForm: source?.IsContractInElectronicForm,
    isCustomPrice: source?.IsCustomPrice,
    isFederalLawsEnable: source?.IsFederalLawsEnable,
    isParentContractNumberNotSpecified: source?.IsParentContractNumberNotSpecified,
    isParticipantCanCreateDeal: source?.IsParticipantCanCreateDeal,
    isSanctionedPurchase: source?.IsSanctionedPurchase,
    isUnitBidding: source?.IsUnitBidding,
    keepGuaranteeForAllParticipants: source?.KeepGuaranteeForAllParticipants,
    keepGuaranteeForParticipantsCount: source?.KeepGuaranteeForParticipantsCount,
    lastModificationDate: source?.LastModificationDate,
    maxDealPrice: source?.MaxDealPrice,
    orderDetails: source?.OrderDetails?.map((item) => orderDetailAdapter(item)),
    orderDocuments: source?.OrderDocuments?.map((item) => orderDocumentAdapter(item)),
    orderName: source?.OrderName,
    orderState: source?.OrderState === null ? undefined : orderStateEnumAdapter(source?.OrderState),
    parentContractNumber: source?.ParentContractNumber,
    parentNotTookPlaceTradeId: source?.ParentNotTookPlaceTradeId,
    participantComment: source?.ParticipantComment,
    participantId: source?.ParticipantId,
    planedDealSignDate: source?.PlanedDealSignDate,
    possibleSendByTransportCompany: source?.PossibleSendByTransportCompany,
    regionCode: source?.RegionCode,
    tradeExtCustomerInfo: source?.TradeExtCustomerInfo === null ? undefined : tradeExtCustomerInfoExcelAdapter(source?.TradeExtCustomerInfo),
    tradeIdentificationCode: source?.TradeIdentificationCode,
    zmoFinanceSource: source?.ZmoFinanceSource === null ? undefined : zmoFinanceSourceEnumAdapter(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType,
  };
}
