import { Order } from '../../models/order.interface';
import { ApiOrderDto } from '../../../swagger/models/api-order-dto';
import { adaptApiAdditionalRequirementDto } from './api-additional-requirement-dto.adapter';
import { adaptApiCustomerContactInfoAltDto } from './api-customer-contact-info.adapter';
import { adaptApiDeliveryMethodAltEnum } from './api-delivery-method.adapter';
import { adaptApiFederalLawLimitAltEnum } from './api-federal-law-limit.adapter';
import { adaptApiOrderDetailDto } from './api-order-detail-dto.adapter';
import { adaptApiOrderDocumentDto } from './api-order-document-dto.adapter';
import { adaptApiOrderStateEnum } from './api-order-state-enum.adapter';
import { adaptApiTradeBusinessFlowEnum } from './api-trade-business-flow-enum.adapter';
import { adaptApiTradeExtCustomerInfoExcelDto } from './api-trade-ext-customer-info-excel-dto.adapter';
import { adaptApiZmoFinanceSourceEnum } from './api-zmo-finance-source-enum.adapter';

export function adaptApiOrderDto(source?: Order | null): ApiOrderDto {
  return {
    AdditionalRequirements: (source?.additionalRequirements ?? []).map((item) => adaptApiAdditionalRequirementDto(item)),
    BusinessFlowType: adaptApiTradeBusinessFlowEnum(source?.businessFlowType),
    Comment: source?.comment,
    ContactInfo: adaptApiCustomerContactInfoAltDto(source?.contactInfo),
    CreatorUserId: source?.creatorUserId,
    CurrencyCode: source?.currencyCode,
    CustomerId: source?.customerId,
    DealConclusionTermInfo: source?.dealConclusionTermInfo,
    DeliveryMethod: adaptApiDeliveryMethodAltEnum(source?.deliveryMethod),
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    ExternalSystemId: source?.externalSystemId,
    FederalLawLimit: adaptApiFederalLawLimitAltEnum(source?.federalLawLimit),
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
    OrderDetails: (source?.orderDetails ?? []).map((item) => adaptApiOrderDetailDto(item)),
    OrderDocuments: (source?.orderDocuments ?? []).map((item) => adaptApiOrderDocumentDto(item)),
    OrderName: source?.orderName,
    OrderState: adaptApiOrderStateEnum(source?.orderState),
    ParentContractNumber: source?.parentContractNumber,
    ParentNotTookPlaceTradeId: source?.parentNotTookPlaceTradeId,
    ParticipantComment: source?.participantComment,
    ParticipantId: source?.participantId,
    PlanedDealSignDate: source?.planedDealSignDate,
    PossibleSendByTransportCompany: source?.possibleSendByTransportCompany,
    RegionCode: source?.regionCode,
    TradeExtCustomerInfo: adaptApiTradeExtCustomerInfoExcelDto(source?.tradeExtCustomerInfo),
    TradeIdentificationCode: source?.tradeIdentificationCode,
    ZmoFinanceSource: adaptApiZmoFinanceSourceEnum(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
  };
}
