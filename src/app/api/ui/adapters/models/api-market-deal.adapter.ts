import { MarketDealAlt } from '../../models/market-deal-alt.interface';
import { ApiMarketDealAltDto } from '../../../swagger/models/api-market-deal';
import { apiApprovalRequestStateEnumAdapter } from '../enums/api-approval-request-state-enum.adapter';
import { apiDictionaryItemAltDtoAdapter } from './api-dictionary-item.adapter';
import { apiDiscussionItemTypeEnumAdapter } from '../enums/api-discussion-item-type-enum.adapter';
import { apiMarketDealStateEnumAdapter } from '../enums/api-market-deal-state-enum.adapter';
import { apiPurchaseMethodTypeEnumAdapter } from '../enums/api-purchase-method-type-enum.adapter';
import { apiRetradingTypeEnumAdapter } from '../enums/api-retrading-type-enum.adapter';
import { apiTradeBusinessFlowEnumAdapter } from '../enums/api-trade-business-flow-enum.adapter';

export const apiMarketDealAltDtoAdapter = (source?: MarketDealAlt | null): ApiMarketDealAltDto => {
  return {
    ApprovalRequestState: source?.approvalRequestState === null ? undefined : apiApprovalRequestStateEnumAdapter(source?.approvalRequestState),
    AuctionEndDate: source?.auctionEndDate,
    BidsCount: source?.bidsCount,
    BusinessFlowType: source?.businessFlowType === null ? undefined : apiTradeBusinessFlowEnumAdapter(source?.businessFlowType),
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
    DeliveryKladrs: source?.deliveryKladrs?.map((item) => apiDictionaryItemAltDtoAdapter(item)),
    DiscussionId: source?.discussionId,
    Downloads: source?.downloads,
    ExternalId: source?.externalId,
    ExternalSystemId: source?.externalSystemId,
    FillingApplicationEndDate: source?.fillingApplicationEndDate,
    Hosts: source?.hosts,
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
    LastDiscussionItemType: source?.lastDiscussionItemType === null ? undefined : apiDiscussionItemTypeEnumAdapter(source?.lastDiscussionItemType),
    LotItemsCount: source?.lotItemsCount,
    MarketDealState: source?.marketDealState === null ? undefined : apiMarketDealStateEnumAdapter(source?.marketDealState),
    MarketDealStateDescription: source?.marketDealStateDescription,
    OnlyOneRetradingBidAllowed: source?.onlyOneRetradingBidAllowed,
    OrderChangeQuantity: source?.orderChangeQuantity,
    OrderChangeUnitPrice: source?.orderChangeUnitPrice,
    OrganizerGuid: source?.organizerGuid,
    OrganizerNameAndInn: source?.organizerNameAndInn,
    PictureFileGuids: source?.pictureFileGuids,
    PlanNumber: source?.planNumber,
    PlanPositionNumber: source?.planPositionNumber,
    Price: source?.price,
    PublicationDate: source?.publicationDate,
    PurchaseMethodType: source?.purchaseMethodType === null ? undefined : apiPurchaseMethodTypeEnumAdapter(source?.purchaseMethodType),
    Quantity: source?.quantity,
    RetradingEndDate: source?.retradingEndDate,
    RetradingStartDate: source?.retradingStartDate,
    RetradingType: source?.retradingType === null ? undefined : apiRetradingTypeEnumAdapter(source?.retradingType),
    ShortOkeiName: source?.shortOkeiName,
    TradeName: source?.tradeName,
    TradeNumber: source?.tradeNumber,
    UnitPrice: source?.unitPrice,
    UnitPriceInCurrency: source?.unitPriceInCurrency,
    Views: source?.views,
  };
}
