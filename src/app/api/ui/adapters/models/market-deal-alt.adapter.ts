import { ApiMarketDealAltDto } from '../../../swagger/models/api-market-deal';
import { MarketDealAlt } from '../../models/market-deal-alt.interface';
import { approvalRequestStateEnumAdapter } from '../enums/approval-request-state-enum.adapter';
import { dictionaryItemAltAdapter } from './dictionary-item-alt.adapter';
import { discussionItemTypeEnumAdapter } from '../enums/discussion-item-type-enum.adapter';
import { marketDealStateEnumAdapter } from '../enums/market-deal-state-enum.adapter';
import { purchaseMethodTypeEnumAdapter } from '../enums/purchase-method-type-enum.adapter';
import { retradingTypeEnumAdapter } from '../enums/retrading-type-enum.adapter';
import { tradeBusinessFlowEnumAdapter } from '../enums/trade-business-flow-enum.adapter';

export const marketDealAltAdapter = (source?: ApiMarketDealAltDto | null): MarketDealAlt => {
  return {
    approvalRequestState: source?.ApprovalRequestState === null ? undefined : approvalRequestStateEnumAdapter(source?.ApprovalRequestState),
    auctionEndDate: source?.AuctionEndDate,
    bidsCount: source?.BidsCount,
    businessFlowType: source?.BusinessFlowType === null ? undefined : tradeBusinessFlowEnumAdapter(source?.BusinessFlowType),
    countApplications: source?.CountApplications,
    counterPartyOrganizationGuid: source?.CounterPartyOrganizationGuid,
    counterPartyOrganizationId: source?.CounterPartyOrganizationId,
    currencyCode: source?.CurrencyCode,
    customerExternalOrganizationId: source?.CustomerExternalOrganizationId,
    customerGuid: source?.CustomerGuid,
    customerNameAndInn: source?.CustomerNameAndInn,
    customerSource: source?.CustomerSource,
    dealStateId: source?.DealStateId,
    dealStateName: source?.DealStateName,
    deliveryKladrRegionName: source?.DeliveryKladrRegionName,
    deliveryKladrs: source?.DeliveryKladrs?.map((item) => dictionaryItemAltAdapter(item)),
    discussionId: source?.DiscussionId,
    downloads: source?.Downloads,
    externalId: source?.ExternalId,
    externalSystemId: source?.ExternalSystemId,
    fillingApplicationEndDate: source?.FillingApplicationEndDate,
    hosts: source?.Hosts,
    id: source?.Id,
    isAnyApplicationExists: source?.IsAnyApplicationExists,
    isContractSigningSuspended: source?.IsContractSigningSuspended,
    isDetailedMetricsAccessible: source?.IsDetailedMetricsAccessible,
    isImmediate: source?.IsImmediate,
    isImportPhaseout: source?.IsImportPhaseout,
    isPublicApplication: source?.IsPublicApplication,
    isRetradingEnabled: source?.IsRetradingEnabled,
    isSuspended: source?.IsSuspended,
    isUnitBidding: source?.IsUnitBidding,
    lastDiscussionItemDate: source?.LastDiscussionItemDate,
    lastDiscussionItemType: source?.LastDiscussionItemType === null ? undefined : discussionItemTypeEnumAdapter(source?.LastDiscussionItemType),
    lotItemsCount: source?.LotItemsCount,
    marketDealState: source?.MarketDealState === null ? undefined : marketDealStateEnumAdapter(source?.MarketDealState),
    marketDealStateDescription: source?.MarketDealStateDescription,
    onlyOneRetradingBidAllowed: source?.OnlyOneRetradingBidAllowed,
    orderChangeQuantity: source?.OrderChangeQuantity,
    orderChangeUnitPrice: source?.OrderChangeUnitPrice,
    organizerGuid: source?.OrganizerGuid,
    organizerNameAndInn: source?.OrganizerNameAndInn,
    pictureFileGuids: source?.PictureFileGuids,
    planNumber: source?.PlanNumber,
    planPositionNumber: source?.PlanPositionNumber,
    price: source?.Price,
    publicationDate: source?.PublicationDate,
    purchaseMethodType: source?.PurchaseMethodType === null ? undefined : purchaseMethodTypeEnumAdapter(source?.PurchaseMethodType),
    quantity: source?.Quantity,
    retradingEndDate: source?.RetradingEndDate,
    retradingStartDate: source?.RetradingStartDate,
    retradingType: source?.RetradingType === null ? undefined : retradingTypeEnumAdapter(source?.RetradingType),
    shortOkeiName: source?.ShortOkeiName,
    tradeName: source?.TradeName,
    tradeNumber: source?.TradeNumber,
    unitPrice: source?.UnitPrice,
    unitPriceInCurrency: source?.UnitPriceInCurrency,
    views: source?.Views,
  };
}
