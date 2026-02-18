import { MarketDealAlt } from '../../models/market-deal-alt.interface';
import { ApiMarketDealAltDto } from '../../../swagger/models/api-market-deal';
import { adaptApiApprovalRequestStateEnum } from './api-approval-request-state-enum.adapter';
import { adaptApiDictionaryItemAltDto } from './api-dictionary-item.adapter';
import { adaptApiDiscussionItemTypeEnum } from './api-discussion-item-type-enum.adapter';
import { adaptApiMarketDealStateEnum } from './api-market-deal-state-enum.adapter';
import { adaptApiPurchaseMethodTypeEnum } from './api-purchase-method-type-enum.adapter';
import { adaptApiRetradingTypeEnum } from './api-retrading-type-enum.adapter';
import { adaptApiTradeBusinessFlowEnum } from './api-trade-business-flow-enum.adapter';

export function adaptApiMarketDealAltDto(source?: MarketDealAlt | null): ApiMarketDealAltDto {
  return {
    ApprovalRequestState: adaptApiApprovalRequestStateEnum(source?.approvalRequestState),
    AuctionEndDate: source?.auctionEndDate,
    BidsCount: source?.bidsCount,
    BusinessFlowType: adaptApiTradeBusinessFlowEnum(source?.businessFlowType),
    CountApplications: source?.countApplications,
    CounterPartyOrganizationGuid: source?.counterPartyOrganizationGuid,
    CounterPartyOrganizationId: source?.counterPartyOrganizationId,
    CurrencyCode: source?.currencyCode,
    CustomerExternalOrganizationId: source?.customerExternalOrganizationId,
    CustomerGuid: source?.customerGuid,
    CustomerNameAndInn: source?.customerNameAndInn,
    CustomerSource: source?.customerSource,
    DealStateId: source?.dealStateId,
    DealStateName: source?.dealStateName,
    DeliveryKladrRegionName: source?.deliveryKladrRegionName,
    DeliveryKladrs: (source?.deliveryKladrs ?? []).map((item) => adaptApiDictionaryItemAltDto(item)),
    DiscussionId: source?.discussionId,
    Downloads: source?.downloads,
    ExternalId: source?.externalId,
    ExternalSystemId: source?.externalSystemId,
    FillingApplicationEndDate: source?.fillingApplicationEndDate,
    Hosts: source?.hosts ?? [],
    Id: source?.id,
    IsAnyApplicationExists: source?.isAnyApplicationExists,
    IsContractSigningSuspended: source?.isContractSigningSuspended,
    IsDetailedMetricsAccessible: source?.isDetailedMetricsAccessible,
    IsImmediate: source?.isImmediate,
    IsImportPhaseout: source?.isImportPhaseout,
    IsPublicApplication: source?.isPublicApplication,
    IsRetradingEnabled: source?.isRetradingEnabled,
    IsSuspended: source?.isSuspended,
    IsUnitBidding: source?.isUnitBidding,
    LastDiscussionItemDate: source?.lastDiscussionItemDate,
    LastDiscussionItemType: adaptApiDiscussionItemTypeEnum(source?.lastDiscussionItemType),
    LotItemsCount: source?.lotItemsCount,
    MarketDealState: adaptApiMarketDealStateEnum(source?.marketDealState),
    MarketDealStateDescription: source?.marketDealStateDescription,
    OnlyOneRetradingBidAllowed: source?.onlyOneRetradingBidAllowed,
    OrderChangeQuantity: source?.orderChangeQuantity,
    OrderChangeUnitPrice: source?.orderChangeUnitPrice,
    OrganizerGuid: source?.organizerGuid,
    OrganizerNameAndInn: source?.organizerNameAndInn,
    PictureFileGuids: source?.pictureFileGuids ?? [],
    PlanNumber: source?.planNumber,
    PlanPositionNumber: source?.planPositionNumber,
    Price: source?.price,
    PublicationDate: source?.publicationDate,
    PurchaseMethodType: adaptApiPurchaseMethodTypeEnum(source?.purchaseMethodType),
    Quantity: source?.quantity,
    RetradingEndDate: source?.retradingEndDate,
    RetradingStartDate: source?.retradingStartDate,
    RetradingType: adaptApiRetradingTypeEnum(source?.retradingType),
    ShortOkeiName: source?.shortOkeiName,
    TradeName: source?.tradeName,
    TradeNumber: source?.tradeNumber,
    UnitPrice: source?.unitPrice,
    UnitPriceInCurrency: source?.unitPriceInCurrency,
    Views: source?.views,
  };
}
