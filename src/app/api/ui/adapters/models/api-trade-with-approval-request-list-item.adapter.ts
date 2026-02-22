import { TradeWithApprovalRequestListItemAlt } from '../../models/trade-with-approval-request-list-item-alt.interface';
import { ApiTradeWithApprovalRequestListItemAltDto } from '../../../swagger/models/api-trade-with-approval-request-list-item';
import { apiApprovalRequestStateEnumAdapter } from '../enums/api-approval-request-state-enum.adapter';
import { apiDictionaryItem2AltDtoAdapter } from './api-dictionary-item-2.adapter';
import { apiMarketDealStateEnumAdapter } from '../enums/api-market-deal-state-enum.adapter';

export const apiTradeWithApprovalRequestListItemAltDtoAdapter = (source?: TradeWithApprovalRequestListItemAlt | null): ApiTradeWithApprovalRequestListItemAltDto => {
  return {
    ApprovalRequestState: source?.approvalRequestState === null ? undefined : apiApprovalRequestStateEnumAdapter(source?.approvalRequestState),
    DeliveryKladrs: source?.deliveryKladrs?.map((item) => apiDictionaryItem2AltDtoAdapter(item)),
    FillingApplicationEndDate: source?.fillingApplicationEndDate,
    Id: source?.id,
    LotItemsCount: source?.lotItemsCount,
    Name: source?.name,
    Price: source?.price,
    State: source?.state === null ? undefined : apiMarketDealStateEnumAdapter(source?.state),
    StateString: source?.stateString,
    WorkGroupsNames: source?.workGroupsNames,
  };
}
