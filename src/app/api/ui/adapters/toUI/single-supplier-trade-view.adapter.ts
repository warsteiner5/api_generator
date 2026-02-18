import { ApiSingleSupplierTradeViewDto } from '../../../swagger/models/api-single-supplier-trade-view-dto';
import { SingleSupplierTradeView } from '../../models/single-supplier-trade-view.interface';
import { adaptDealStateEnumToUI } from './deal-state-enum.adapter';
import { adaptDeliveryMethodAltEnumToUI } from './delivery-method-alt-enum.adapter';
import { adaptM4DDealSignRequiredEnumToUI } from './m-4-d-deal-sign-required-enum.adapter';
import { adaptMarketDealStateEnumToUI } from './market-deal-state-enum.adapter';
import { adaptSingleSupplierTradeProductAltToUI } from './single-supplier-trade-product-alt.adapter';
import { adaptTradeBusinessFlowEnumToUI } from './trade-business-flow-enum.adapter';

export function adaptSingleSupplierTradeViewToUI(source?: ApiSingleSupplierTradeViewDto | null): SingleSupplierTradeView {
  return {
    businessFlowType: adaptTradeBusinessFlowEnumToUI(source?.BusinessFlowType),
    customerFullName: source?.CustomerFullName ?? '',
    customerGuid: source?.CustomerGuid ?? '',
    customerPhysAddress: source?.CustomerPhysAddress ?? '',
    dealConclusionTermInfo: source?.DealConclusionTermInfo ?? '',
    dealId: source?.DealId ?? 0,
    dealState: adaptDealStateEnumToUI(source?.DealState),
    deliveryKladrRegionName: source?.DeliveryKladrRegionName ?? '',
    deliveryMethod: adaptDeliveryMethodAltEnumToUI(source?.DeliveryMethod),
    deliveryTerms: source?.DeliveryTerms ?? '',
    fillingApplicationEndDate: source?.FillingApplicationEndDate ?? '',
    id: source?.Id ?? 0,
    initialPriceWithVat: source?.InitialPriceWithVat ?? 0,
    initialPriceWithoutVat: source?.InitialPriceWithoutVat ?? 0,
    isContractInElectronicForm: source?.IsContractInElectronicForm ?? false,
    isCustomPrice: source?.IsCustomPrice ?? false,
    isCustomer: source?.IsCustomer ?? false,
    isOrganizer: source?.IsOrganizer ?? false,
    isParentContractNumberNotSpecified: source?.IsParentContractNumberNotSpecified ?? false,
    isRussianPurchaseObjectHasAdvantage: source?.IsRussianPurchaseObjectHasAdvantage ?? false,
    isSanctionedPurchase: source?.IsSanctionedPurchase ?? false,
    isUnitBidding: source?.IsUnitBidding ?? false,
    lotId: source?.LotId ?? 0,
    m4DDealSignRequired: adaptM4DDealSignRequiredEnumToUI(source?.M4DDealSignRequired),
    marketState: adaptMarketDealStateEnumToUI(source?.MarketState),
    marketStateDescription: source?.MarketStateDescription ?? '',
    movingProLink: source?.MovingProLink ?? '',
    parentContractNumber: source?.ParentContractNumber ?? '',
    parentNotTookPlaceTradeHost: source?.ParentNotTookPlaceTradeHost ?? '',
    parentNotTookPlaceTradeId: source?.ParentNotTookPlaceTradeId ?? 0,
    participantFullName: source?.ParticipantFullName ?? '',
    participantGuid: source?.ParticipantGuid ?? '',
    planedDealSignDate: source?.PlanedDealSignDate ?? '',
    products: (source?.Products ?? []).map((item) => adaptSingleSupplierTradeProductAltToUI(item)),
    publicationDate: source?.PublicationDate ?? '',
    tradeName: source?.TradeName ?? '',
    tradeNumber: source?.TradeNumber ?? '',
    zmoFinanceSourceDescription: source?.ZmoFinanceSourceDescription ?? '',
    zmoFzTypeDescription: source?.ZmoFzTypeDescription ?? '',
    zmoFzTypeName: source?.ZmoFzTypeName ?? '',
  };
}
