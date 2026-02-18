import { SingleSupplierTradeView } from '../../models/single-supplier-trade-view.interface';
import { ApiSingleSupplierTradeViewDto } from '../../../swagger/models/api-single-supplier-trade-view-dto';
import { adaptApiDealStateEnum } from './api-deal-state-enum.adapter';
import { adaptApiDeliveryMethodAltEnum } from './api-delivery-method.adapter';
import { adaptApiM4DDealSignRequiredEnum } from './api-m-4-d-deal-sign-required-enum.adapter';
import { adaptApiMarketDealStateEnum } from './api-market-deal-state-enum.adapter';
import { adaptApiSingleSupplierTradeProductAltDto } from './api-single-supplier-trade-product.adapter';
import { adaptApiTradeBusinessFlowEnum } from './api-trade-business-flow-enum.adapter';

export function adaptApiSingleSupplierTradeViewDto(source?: SingleSupplierTradeView | null): ApiSingleSupplierTradeViewDto {
  return {
    BusinessFlowType: adaptApiTradeBusinessFlowEnum(source?.businessFlowType),
    CustomerFullName: source?.customerFullName,
    CustomerGuid: source?.customerGuid,
    CustomerPhysAddress: source?.customerPhysAddress,
    DealConclusionTermInfo: source?.dealConclusionTermInfo,
    DealId: source?.dealId,
    DealState: adaptApiDealStateEnum(source?.dealState),
    DeliveryKladrRegionName: source?.deliveryKladrRegionName,
    DeliveryMethod: adaptApiDeliveryMethodAltEnum(source?.deliveryMethod),
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
    M4DDealSignRequired: adaptApiM4DDealSignRequiredEnum(source?.m4DDealSignRequired),
    MarketState: adaptApiMarketDealStateEnum(source?.marketState),
    MarketStateDescription: source?.marketStateDescription,
    MovingProLink: source?.movingProLink,
    ParentContractNumber: source?.parentContractNumber,
    ParentNotTookPlaceTradeHost: source?.parentNotTookPlaceTradeHost,
    ParentNotTookPlaceTradeId: source?.parentNotTookPlaceTradeId,
    ParticipantFullName: source?.participantFullName,
    ParticipantGuid: source?.participantGuid,
    PlanedDealSignDate: source?.planedDealSignDate,
    Products: (source?.products ?? []).map((item) => adaptApiSingleSupplierTradeProductAltDto(item)),
    PublicationDate: source?.publicationDate,
    TradeName: source?.tradeName,
    TradeNumber: source?.tradeNumber,
    ZmoFinanceSourceDescription: source?.zmoFinanceSourceDescription,
    ZmoFzTypeDescription: source?.zmoFzTypeDescription,
    ZmoFzTypeName: source?.zmoFzTypeName,
  };
}
