import { ApiOrderAltDto } from '../../../swagger/models/api-order';
import { OrderAlt } from '../../models/order-alt.interface';
import { adaptAdditionalRequirementAltToUI } from './additional-requirement-alt.adapter';
import { adaptContactInformationToUI } from './contact-information.adapter';
import { adaptDeliveryMethodAltEnumToUI } from './delivery-method-alt-enum.adapter';
import { adaptOrderDetailAltToUI } from './order-detail-alt.adapter';
import { adaptOrderDocumentToUI } from './order-document.adapter';
import { adaptZmoFinanceSourceEnumToUI } from './zmo-finance-source-enum.adapter';

export function adaptOrderAltToUI(source?: ApiOrderAltDto | null): OrderAlt {
  return {
    additionalRequirements: (source?.AdditionalRequirements ?? []).map((item) => adaptAdditionalRequirementAltToUI(item)),
    comment: source?.Comment ?? '',
    contactInfo: adaptContactInformationToUI(source?.ContactInfo),
    currencyCode: source?.CurrencyCode ?? '',
    dealConclusionTermInfo: source?.DealConclusionTermInfo ?? '',
    deliveryMethod: adaptDeliveryMethodAltEnumToUI(source?.DeliveryMethod),
    deliveryPlace: source?.DeliveryPlace ?? '',
    deliveryTerms: source?.DeliveryTerms ?? '',
    description: source?.Description ?? '',
    id: source?.Id ?? 0,
    initialPrice: source?.InitialPrice ?? 0,
    isAutoCompleteDeal: source?.IsAutoCompleteDeal ?? false,
    isContractInElectronicForm: source?.IsContractInElectronicForm ?? false,
    isCustomPrice: source?.IsCustomPrice ?? false,
    isFederalLawsEnable: source?.IsFederalLawsEnable ?? false,
    isParentContractNumberNotSpecified: source?.IsParentContractNumberNotSpecified ?? false,
    isSanctionedPurchase: source?.IsSanctionedPurchase ?? false,
    isUnitBidding: source?.IsUnitBidding ?? false,
    kladrRegionCode: source?.KladrRegionCode ?? '',
    maxDealPrice: source?.MaxDealPrice ?? 0,
    orderDetails: (source?.OrderDetails ?? []).map((item) => adaptOrderDetailAltToUI(item)),
    orderDocuments: (source?.OrderDocuments ?? []).map((item) => adaptOrderDocumentToUI(item)),
    orderName: source?.OrderName ?? '',
    parentContractNumber: source?.ParentContractNumber ?? '',
    parentNotTookPlaceTradeId: source?.ParentNotTookPlaceTradeId ?? 0,
    planedDealSignDate: source?.PlanedDealSignDate ?? '',
    zmoFinanceSource: adaptZmoFinanceSourceEnumToUI(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType ?? 0,
  };
}
