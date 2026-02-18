import { ApiMarketDealAltDto } from '../../../swagger/models/api-market-deal';
import { MarketDealAlt } from '../../models/market-deal-alt.interface';
import { adaptApprovalRequestStateEnumToUI } from './approval-request-state-enum.adapter';
import { adaptDictionaryItemAltToUI } from './dictionary-item-alt.adapter';
import { adaptDiscussionItemTypeEnumToUI } from './discussion-item-type-enum.adapter';
import { adaptMarketDealStateEnumToUI } from './market-deal-state-enum.adapter';
import { adaptPurchaseMethodTypeEnumToUI } from './purchase-method-type-enum.adapter';
import { adaptRetradingTypeEnumToUI } from './retrading-type-enum.adapter';
import { adaptTradeBusinessFlowEnumToUI } from './trade-business-flow-enum.adapter';

export function adaptMarketDealAltToUI(source?: ApiMarketDealAltDto | null): MarketDealAlt {
  return {
    approvalRequestState: adaptApprovalRequestStateEnumToUI(source?.ApprovalRequestState),
    auctionEndDate: source?.AuctionEndDate ?? '',
    bidsCount: source?.BidsCount ?? 0,
    businessFlowType: adaptTradeBusinessFlowEnumToUI(source?.BusinessFlowType),
    countApplications: source?.CountApplications ?? 0,
    counterPartyOrganizationGuid: source?.CounterPartyOrganizationGuid ?? '',
    counterPartyOrganizationId: source?.CounterPartyOrganizationId ?? 0,
    currencyCode: source?.CurrencyCode ?? '',
    customerExternalOrganizationId: source?.CustomerExternalOrganizationId ?? '',
    customerGuid: source?.CustomerGuid ?? '',
    customerNameAndInn: source?.CustomerNameAndInn ?? '',
    customerSource: source?.CustomerSource ?? 0,
    dealStateId: source?.DealStateId ?? 0,
    dealStateName: source?.DealStateName ?? '',
    deliveryKladrRegionName: source?.DeliveryKladrRegionName ?? '',
    deliveryKladrs: (source?.DeliveryKladrs ?? []).map((item) => adaptDictionaryItemAltToUI(item)),
    discussionId: source?.DiscussionId ?? 0,
    downloads: source?.Downloads ?? 0,
    externalId: source?.ExternalId ?? '',
    externalSystemId: source?.ExternalSystemId ?? 0,
    fillingApplicationEndDate: source?.FillingApplicationEndDate ?? '',
    hosts: source?.Hosts ?? [],
    id: source?.Id ?? 0,
    isAnyApplicationExists: source?.IsAnyApplicationExists ?? false,
    isContractSigningSuspended: source?.IsContractSigningSuspended ?? false,
    isDetailedMetricsAccessible: source?.IsDetailedMetricsAccessible ?? false,
    isImmediate: source?.IsImmediate ?? false,
    isImportPhaseout: source?.IsImportPhaseout ?? false,
    isPublicApplication: source?.IsPublicApplication ?? false,
    isRetradingEnabled: source?.IsRetradingEnabled ?? false,
    isSuspended: source?.IsSuspended ?? false,
    isUnitBidding: source?.IsUnitBidding ?? false,
    lastDiscussionItemDate: source?.LastDiscussionItemDate ?? '',
    lastDiscussionItemType: adaptDiscussionItemTypeEnumToUI(source?.LastDiscussionItemType),
    lotItemsCount: source?.LotItemsCount ?? 0,
    marketDealState: adaptMarketDealStateEnumToUI(source?.MarketDealState),
    marketDealStateDescription: source?.MarketDealStateDescription ?? '',
    onlyOneRetradingBidAllowed: source?.OnlyOneRetradingBidAllowed ?? false,
    orderChangeQuantity: source?.OrderChangeQuantity ?? 0,
    orderChangeUnitPrice: source?.OrderChangeUnitPrice ?? 0,
    organizerGuid: source?.OrganizerGuid ?? '',
    organizerNameAndInn: source?.OrganizerNameAndInn ?? '',
    pictureFileGuids: source?.PictureFileGuids ?? [],
    planNumber: source?.PlanNumber ?? '',
    planPositionNumber: source?.PlanPositionNumber ?? '',
    price: source?.Price ?? 0,
    publicationDate: source?.PublicationDate ?? '',
    purchaseMethodType: adaptPurchaseMethodTypeEnumToUI(source?.PurchaseMethodType),
    quantity: source?.Quantity ?? 0,
    retradingEndDate: source?.RetradingEndDate ?? '',
    retradingStartDate: source?.RetradingStartDate ?? '',
    retradingType: adaptRetradingTypeEnumToUI(source?.RetradingType),
    shortOkeiName: source?.ShortOkeiName ?? '',
    tradeName: source?.TradeName ?? '',
    tradeNumber: source?.TradeNumber ?? '',
    unitPrice: source?.UnitPrice ?? 0,
    unitPriceInCurrency: source?.UnitPriceInCurrency ?? 0,
    views: source?.Views ?? 0,
  };
}
