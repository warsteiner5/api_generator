import { ApiOrderAltDto } from '../../../swagger/models/api-order';
import { OrderAlt } from '../../models/order-alt.interface';
import { additionalRequirementAltAdapter } from './additional-requirement-alt.adapter';
import { contactInformationAdapter } from './contact-information.adapter';
import { deliveryMethodAltEnumAdapter } from '../enums/delivery-method-alt-enum.adapter';
import { orderDetailAltAdapter } from './order-detail-alt.adapter';
import { orderDocumentAdapter } from './order-document.adapter';
import { zmoFinanceSourceEnumAdapter } from '../enums/zmo-finance-source-enum.adapter';

export const orderAltAdapter = (source?: ApiOrderAltDto | null): OrderAlt => {
  return {
    additionalRequirements: source?.AdditionalRequirements?.map((item) => additionalRequirementAltAdapter(item)),
    comment: source?.Comment,
    contactInfo: source?.ContactInfo === null ? undefined : contactInformationAdapter(source?.ContactInfo),
    currencyCode: source?.CurrencyCode,
    dealConclusionTermInfo: source?.DealConclusionTermInfo,
    deliveryMethod: source?.DeliveryMethod === null ? undefined : deliveryMethodAltEnumAdapter(source?.DeliveryMethod),
    deliveryPlace: source?.DeliveryPlace,
    deliveryTerms: source?.DeliveryTerms,
    description: source?.Description,
    id: source?.Id,
    initialPrice: source?.InitialPrice,
    isAutoCompleteDeal: source?.IsAutoCompleteDeal,
    isContractInElectronicForm: source?.IsContractInElectronicForm,
    isCustomPrice: source?.IsCustomPrice,
    isFederalLawsEnable: source?.IsFederalLawsEnable,
    isParentContractNumberNotSpecified: source?.IsParentContractNumberNotSpecified,
    isSanctionedPurchase: source?.IsSanctionedPurchase,
    isUnitBidding: source?.IsUnitBidding,
    kladrRegionCode: source?.KladrRegionCode,
    maxDealPrice: source?.MaxDealPrice,
    orderDetails: source?.OrderDetails?.map((item) => orderDetailAltAdapter(item)),
    orderDocuments: source?.OrderDocuments?.map((item) => orderDocumentAdapter(item)),
    orderName: source?.OrderName,
    parentContractNumber: source?.ParentContractNumber,
    parentNotTookPlaceTradeId: source?.ParentNotTookPlaceTradeId,
    planedDealSignDate: source?.PlanedDealSignDate,
    zmoFinanceSource: source?.ZmoFinanceSource === null ? undefined : zmoFinanceSourceEnumAdapter(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType,
  };
}
