import { Order } from '../../models/order.interface';
import { ApiOrderDto } from '../../../swagger/models/api-order-dto';
import { apiAdditionalRequirementDtoAdapter } from './api-additional-requirement-dto.adapter';
import { apiCustomerContactInfoAltDtoAdapter } from './api-customer-contact-info.adapter';
import { apiDeliveryMethodAltEnumAdapter } from '../enums/api-delivery-method.adapter';
import { apiFederalLawLimitAltEnumAdapter } from '../enums/api-federal-law-limit.adapter';
import { apiOrderDetailDtoAdapter } from './api-order-detail-dto.adapter';
import { apiOrderDocumentDtoAdapter } from './api-order-document-dto.adapter';
import { apiOrderStateEnumAdapter } from '../enums/api-order-state-enum.adapter';
import { apiTradeBusinessFlowEnumAdapter } from '../enums/api-trade-business-flow-enum.adapter';
import { apiTradeExtCustomerInfoExcelDtoAdapter } from './api-trade-ext-customer-info-excel-dto.adapter';
import { apiZmoFinanceSourceEnumAdapter } from '../enums/api-zmo-finance-source-enum.adapter';

export const apiOrderDtoAdapter = (source?: Order | null): ApiOrderDto => {
  return {
    AdditionalRequirements: source?.additionalRequirements?.map((item) => apiAdditionalRequirementDtoAdapter(item)),
    BusinessFlowType: source?.businessFlowType === null ? undefined : apiTradeBusinessFlowEnumAdapter(source?.businessFlowType),
    Comment: source?.comment,
    ContactInfo: source?.contactInfo === null ? undefined : apiCustomerContactInfoAltDtoAdapter(source?.contactInfo),
    CreatorUserId: source?.creatorUserId,
    CurrencyCode: source?.currencyCode,
    CustomerId: source?.customerId,
    DealConclusionTermInfo: source?.dealConclusionTermInfo,
    DeliveryMethod: source?.deliveryMethod === null ? undefined : apiDeliveryMethodAltEnumAdapter(source?.deliveryMethod),
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    ExternalSystemId: source?.externalSystemId,
    FederalLawLimit: source?.federalLawLimit === null ? undefined : apiFederalLawLimitAltEnumAdapter(source?.federalLawLimit),
    Id: source?.id,
    InitialPrice: source?.initialPrice,
    IsAutoCompleteDeal: source?.isAutoCompleteDeal,
    IsBasedOnPublicOffer: source?.isBasedOnPublicOffer,
    IsCartOrder: source?.isCartOrder,
    IsContractInElectronicForm: source?.isContractInElectronicForm,
    IsCustomPrice: source?.isCustomPrice,
    IsFederalLawsEnable: source?.isFederalLawsEnable,
    IsParentContractNumberNotSpecified: source?.isParentContractNumberNotSpecified,
    IsParticipantCanCreateDeal: source?.isParticipantCanCreateDeal,
    IsSanctionedPurchase: source?.isSanctionedPurchase,
    IsUnitBidding: source?.isUnitBidding,
    KeepGuaranteeForAllParticipants: source?.keepGuaranteeForAllParticipants,
    KeepGuaranteeForParticipantsCount: source?.keepGuaranteeForParticipantsCount,
    LastModificationDate: source?.lastModificationDate,
    MaxDealPrice: source?.maxDealPrice,
    OrderDetails: source?.orderDetails?.map((item) => apiOrderDetailDtoAdapter(item)),
    OrderDocuments: source?.orderDocuments?.map((item) => apiOrderDocumentDtoAdapter(item)),
    OrderName: source?.orderName,
    OrderState: source?.orderState === null ? undefined : apiOrderStateEnumAdapter(source?.orderState),
    ParentContractNumber: source?.parentContractNumber,
    ParentNotTookPlaceTradeId: source?.parentNotTookPlaceTradeId,
    ParticipantComment: source?.participantComment,
    ParticipantId: source?.participantId,
    PlanedDealSignDate: source?.planedDealSignDate,
    PossibleSendByTransportCompany: source?.possibleSendByTransportCompany,
    RegionCode: source?.regionCode,
    TradeExtCustomerInfo: source?.tradeExtCustomerInfo === null ? undefined : apiTradeExtCustomerInfoExcelDtoAdapter(source?.tradeExtCustomerInfo),
    TradeIdentificationCode: source?.tradeIdentificationCode,
    ZmoFinanceSource: source?.zmoFinanceSource === null ? undefined : apiZmoFinanceSourceEnumAdapter(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
  };
}
