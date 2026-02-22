import { OrderAlt } from '../../models/order-alt.interface';
import { ApiOrderAltDto } from '../../../swagger/models/api-order';
import { apiAdditionalRequirementAltDtoAdapter } from './api-additional-requirement.adapter';
import { apiContactInformationDtoAdapter } from './api-contact-information-dto.adapter';
import { apiDeliveryMethodAltEnumAdapter } from '../enums/api-delivery-method.adapter';
import { apiOrderDetailAltDtoAdapter } from './api-order-detail.adapter';
import { apiOrderDocumentDtoAdapter } from './api-order-document-dto.adapter';
import { apiZmoFinanceSourceEnumAdapter } from '../enums/api-zmo-finance-source-enum.adapter';

export const apiOrderAltDtoAdapter = (source?: OrderAlt | null): ApiOrderAltDto => {
  return {
    AdditionalRequirements: source?.additionalRequirements?.map((item) => apiAdditionalRequirementAltDtoAdapter(item)),
    Comment: source?.comment,
    ContactInfo: source?.contactInfo === null ? undefined : apiContactInformationDtoAdapter(source?.contactInfo),
    CurrencyCode: source?.currencyCode,
    DealConclusionTermInfo: source?.dealConclusionTermInfo,
    DeliveryMethod: source?.deliveryMethod === null ? undefined : apiDeliveryMethodAltEnumAdapter(source?.deliveryMethod),
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
    OrderDetails: source?.orderDetails?.map((item) => apiOrderDetailAltDtoAdapter(item)),
    OrderDocuments: source?.orderDocuments?.map((item) => apiOrderDocumentDtoAdapter(item)),
    OrderName: source?.orderName,
    ParentContractNumber: source?.parentContractNumber,
    ParentNotTookPlaceTradeId: source?.parentNotTookPlaceTradeId,
    PlanedDealSignDate: source?.planedDealSignDate,
    ZmoFinanceSource: source?.zmoFinanceSource === null ? undefined : apiZmoFinanceSourceEnumAdapter(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
  };
}
