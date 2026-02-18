import { ApiTradeWithApprovalRequestListItemAltDto } from '../../../swagger/models/api-trade-with-approval-request-list-item';
import { TradeWithApprovalRequestListItemAlt } from '../../models/trade-with-approval-request-list-item-alt.interface';
import { adaptApprovalRequestStateEnumToUI } from './approval-request-state-enum.adapter';
import { adaptDictionaryItem2AltToUI } from './dictionary-item-2-alt.adapter';
import { adaptMarketDealStateEnumToUI } from './market-deal-state-enum.adapter';

export function adaptTradeWithApprovalRequestListItemAltToUI(source?: ApiTradeWithApprovalRequestListItemAltDto | null): TradeWithApprovalRequestListItemAlt {
  return {
    approvalRequestState: adaptApprovalRequestStateEnumToUI(source?.ApprovalRequestState),
    deliveryKladrs: (source?.DeliveryKladrs ?? []).map((item) => adaptDictionaryItem2AltToUI(item)),
    fillingApplicationEndDate: source?.FillingApplicationEndDate ?? '',
    id: source?.Id ?? 0,
    lotItemsCount: source?.LotItemsCount ?? 0,
    name: source?.Name ?? '',
    price: source?.Price ?? 0,
    state: adaptMarketDealStateEnumToUI(source?.State),
    stateString: source?.StateString ?? '',
    workGroupsNames: source?.WorkGroupsNames ?? [],
  };
}
