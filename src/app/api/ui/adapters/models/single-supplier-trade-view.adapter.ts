import { ApiSingleSupplierTradeViewDto } from '../../../swagger/models/api-single-supplier-trade-view-dto';
import { SingleSupplierTradeView } from '../../models/single-supplier-trade-view.interface';
import { additionalRequirementDto2Adapter } from './additional-requirement-dto-2.adapter';
import { dealStateEnumAdapter } from '../enums/deal-state-enum.adapter';
import { deliveryMethodAltEnumAdapter } from '../enums/delivery-method-alt-enum.adapter';
import { m4DDealSignRequiredEnumAdapter } from '../enums/m-4-d-deal-sign-required-enum.adapter';
import { marketDealStateEnumAdapter } from '../enums/market-deal-state-enum.adapter';
import { singleSupplierTradeProductAltAdapter } from './single-supplier-trade-product-alt.adapter';
import { tradeBusinessFlowEnumAdapter } from '../enums/trade-business-flow-enum.adapter';

export const singleSupplierTradeViewAdapter = (source?: ApiSingleSupplierTradeViewDto | null): SingleSupplierTradeView => {
  return {
    additionalRequirements: source?.AdditionalRequirements?.map((item) => additionalRequirementDto2Adapter(item)),
    businessFlowType: source?.BusinessFlowType === null ? undefined : tradeBusinessFlowEnumAdapter(source?.BusinessFlowType),
    customerFullName: source?.CustomerFullName,
    customerGuid: source?.CustomerGuid,
    customerPhysAddress: source?.CustomerPhysAddress,
    dealConclusionTermInfo: source?.DealConclusionTermInfo,
    dealId: source?.DealId,
    dealState: source?.DealState === null ? undefined : dealStateEnumAdapter(source?.DealState),
    deliveryKladrRegionName: source?.DeliveryKladrRegionName,
    deliveryMethod: source?.DeliveryMethod === null ? undefined : deliveryMethodAltEnumAdapter(source?.DeliveryMethod),
    deliveryTerms: source?.DeliveryTerms,
    fillingApplicationEndDate: source?.FillingApplicationEndDate,
    id: source?.Id,
    initialPriceWithVat: source?.InitialPriceWithVat,
    initialPriceWithoutVat: source?.InitialPriceWithoutVat,
    isContractInElectronicForm: source?.IsContractInElectronicForm,
    isCustomPrice: source?.IsCustomPrice,
    isCustomer: source?.IsCustomer,
    isOrganizer: source?.IsOrganizer,
    isParentContractNumberNotSpecified: source?.IsParentContractNumberNotSpecified,
    isRussianPurchaseObjectHasAdvantage: source?.IsRussianPurchaseObjectHasAdvantage,
    isSanctionedPurchase: source?.IsSanctionedPurchase,
    isUnitBidding: source?.IsUnitBidding,
    lotId: source?.LotId,
    m4DDealSignRequired: source?.M4DDealSignRequired === null ? undefined : m4DDealSignRequiredEnumAdapter(source?.M4DDealSignRequired),
    marketState: source?.MarketState === null ? undefined : marketDealStateEnumAdapter(source?.MarketState),
    marketStateDescription: source?.MarketStateDescription,
    movingProLink: source?.MovingProLink,
    parentContractNumber: source?.ParentContractNumber,
    parentNotTookPlaceTradeHost: source?.ParentNotTookPlaceTradeHost,
    parentNotTookPlaceTradeId: source?.ParentNotTookPlaceTradeId,
    participantFullName: source?.ParticipantFullName,
    participantGuid: source?.ParticipantGuid,
    planedDealSignDate: source?.PlanedDealSignDate,
    products: source?.Products?.map((item) => singleSupplierTradeProductAltAdapter(item)),
    publicationDate: source?.PublicationDate,
    tradeName: source?.TradeName,
    tradeNumber: source?.TradeNumber,
    zmoFinanceSourceDescription: source?.ZmoFinanceSourceDescription,
    zmoFzTypeDescription: source?.ZmoFzTypeDescription,
    zmoFzTypeName: source?.ZmoFzTypeName,
  };
}
