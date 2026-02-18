import { OrderAlt } from '../../models/order-alt.interface';
import { ApiOrderAltDto } from '../../../swagger/models/api-order';
import { adaptApiAdditionalRequirementAltDto } from './api-additional-requirement.adapter';
import { adaptApiContactInformationDto } from './api-contact-information-dto.adapter';
import { adaptApiDeliveryMethodAltEnum } from './api-delivery-method.adapter';
import { adaptApiOrderDetailAltDto } from './api-order-detail.adapter';
import { adaptApiOrderDocumentDto } from './api-order-document-dto.adapter';
import { adaptApiZmoFinanceSourceEnum } from './api-zmo-finance-source-enum.adapter';

export function adaptApiOrderAltDto(source?: OrderAlt | null): ApiOrderAltDto {
  return {
    AdditionalRequirements: (source?.additionalRequirements ?? []).map((item) => adaptApiAdditionalRequirementAltDto(item)),
    Comment: source?.comment,
    ContactInfo: adaptApiContactInformationDto(source?.contactInfo),
    CurrencyCode: source?.currencyCode,
    DealConclusionTermInfo: source?.dealConclusionTermInfo,
    DeliveryMethod: adaptApiDeliveryMethodAltEnum(source?.deliveryMethod),
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    Id: source?.id,
    InitialPrice: source?.initialPrice,
    IsAutoCompleteDeal: source?.isAutoCompleteDeal,
    IsContractInElectronicForm: source?.isContractInElectronicForm,
    IsCustomPrice: source?.isCustomPrice,
    IsFederalLawsEnable: source?.isFederalLawsEnable,
    IsParentContractNumberNotSpecified: source?.isParentContractNumberNotSpecified,
    IsSanctionedPurchase: source?.isSanctionedPurchase,
    IsUnitBidding: source?.isUnitBidding,
    KladrRegionCode: source?.kladrRegionCode,
    MaxDealPrice: source?.maxDealPrice,
    OrderDetails: (source?.orderDetails ?? []).map((item) => adaptApiOrderDetailAltDto(item)),
    OrderDocuments: (source?.orderDocuments ?? []).map((item) => adaptApiOrderDocumentDto(item)),
    OrderName: source?.orderName,
    ParentContractNumber: source?.parentContractNumber,
    ParentNotTookPlaceTradeId: source?.parentNotTookPlaceTradeId,
    PlanedDealSignDate: source?.planedDealSignDate,
    ZmoFinanceSource: adaptApiZmoFinanceSourceEnum(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
  };
}
