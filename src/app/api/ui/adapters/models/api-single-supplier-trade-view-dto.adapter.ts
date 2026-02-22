import { SingleSupplierTradeView } from '../../models/single-supplier-trade-view.interface';
import { ApiSingleSupplierTradeViewDto } from '../../../swagger/models/api-single-supplier-trade-view-dto';
import { apiAdditionalRequirementDto2Adapter } from './api-additional-requirement-dto-2.adapter';
import { apiDealStateEnumAdapter } from '../enums/api-deal-state-enum.adapter';
import { apiDeliveryMethodAltEnumAdapter } from '../enums/api-delivery-method.adapter';
import { apiM4DDealSignRequiredEnumAdapter } from '../enums/api-m-4-d-deal-sign-required-enum.adapter';
import { apiMarketDealStateEnumAdapter } from '../enums/api-market-deal-state-enum.adapter';
import { apiSingleSupplierTradeProductAltDtoAdapter } from './api-single-supplier-trade-product.adapter';
import { apiTradeBusinessFlowEnumAdapter } from '../enums/api-trade-business-flow-enum.adapter';

export const apiSingleSupplierTradeViewDtoAdapter = (source?: SingleSupplierTradeView | null): ApiSingleSupplierTradeViewDto => {
  return {
    AdditionalRequirements: source?.additionalRequirements?.map((item) => apiAdditionalRequirementDto2Adapter(item)),
    BusinessFlowType: source?.businessFlowType === null ? undefined : apiTradeBusinessFlowEnumAdapter(source?.businessFlowType),
    CustomerFullName: source?.customerFullName,
    CustomerGuid: source?.customerGuid,
    CustomerPhysAddress: source?.customerPhysAddress,
    DealConclusionTermInfo: source?.dealConclusionTermInfo,
    DealId: source?.dealId,
    DealState: source?.dealState === null ? undefined : apiDealStateEnumAdapter(source?.dealState),
    DeliveryKladrRegionName: source?.deliveryKladrRegionName,
    DeliveryMethod: source?.deliveryMethod === null ? undefined : apiDeliveryMethodAltEnumAdapter(source?.deliveryMethod),
    DeliveryTerms: source?.deliveryTerms,
    FillingApplicationEndDate: source?.fillingApplicationEndDate,
    Id: source?.id,
    InitialPriceWithVat: source?.initialPriceWithVat,
    InitialPriceWithoutVat: source?.initialPriceWithoutVat,
    IsContractInElectronicForm: source?.isContractInElectronicForm,
    IsCustomPrice: source?.isCustomPrice,
    IsCustomer: source?.isCustomer,
    IsOrganizer: source?.isOrganizer,
    IsParentContractNumberNotSpecified: source?.isParentContractNumberNotSpecified,
    IsRussianPurchaseObjectHasAdvantage: source?.isRussianPurchaseObjectHasAdvantage,
    IsSanctionedPurchase: source?.isSanctionedPurchase,
    IsUnitBidding: source?.isUnitBidding,
    LotId: source?.lotId,
    M4DDealSignRequired: source?.m4DDealSignRequired === null ? undefined : apiM4DDealSignRequiredEnumAdapter(source?.m4DDealSignRequired),
    MarketState: source?.marketState === null ? undefined : apiMarketDealStateEnumAdapter(source?.marketState),
    MarketStateDescription: source?.marketStateDescription,
    MovingProLink: source?.movingProLink,
    ParentContractNumber: source?.parentContractNumber,
    ParentNotTookPlaceTradeHost: source?.parentNotTookPlaceTradeHost,
    ParentNotTookPlaceTradeId: source?.parentNotTookPlaceTradeId,
    ParticipantFullName: source?.participantFullName,
    ParticipantGuid: source?.participantGuid,
    PlanedDealSignDate: source?.planedDealSignDate,
    Products: source?.products?.map((item) => apiSingleSupplierTradeProductAltDtoAdapter(item)),
    PublicationDate: source?.publicationDate,
    TradeName: source?.tradeName,
    TradeNumber: source?.tradeNumber,
    ZmoFinanceSourceDescription: source?.zmoFinanceSourceDescription,
    ZmoFzTypeDescription: source?.zmoFzTypeDescription,
    ZmoFzTypeName: source?.zmoFzTypeName,
  };
}
