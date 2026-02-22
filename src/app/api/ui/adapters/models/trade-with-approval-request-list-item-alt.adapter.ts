import { ApiTradeWithApprovalRequestListItemAltDto } from '../../../swagger/models/api-trade-with-approval-request-list-item';
import { TradeWithApprovalRequestListItemAlt } from '../../models/trade-with-approval-request-list-item-alt.interface';
import { approvalRequestStateEnumAdapter } from '../enums/approval-request-state-enum.adapter';
import { dictionaryItem2AltAdapter } from './dictionary-item-2-alt.adapter';
import { marketDealStateEnumAdapter } from '../enums/market-deal-state-enum.adapter';

export const tradeWithApprovalRequestListItemAltAdapter = (source?: ApiTradeWithApprovalRequestListItemAltDto | null): TradeWithApprovalRequestListItemAlt => {
  return {
    approvalRequestState: source?.ApprovalRequestState === null ? undefined : approvalRequestStateEnumAdapter(source?.ApprovalRequestState),
    deliveryKladrs: source?.DeliveryKladrs?.map((item) => dictionaryItem2AltAdapter(item)),
    fillingApplicationEndDate: source?.FillingApplicationEndDate,
    id: source?.Id,
    lotItemsCount: source?.LotItemsCount,
    name: source?.Name,
    price: source?.Price,
    state: source?.State === null ? undefined : marketDealStateEnumAdapter(source?.State),
    stateString: source?.StateString,
    workGroupsNames: source?.WorkGroupsNames,
  };
}
