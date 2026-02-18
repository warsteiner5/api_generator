import { TradeWithApprovalRequestListItemAlt } from '../../models/trade-with-approval-request-list-item-alt.interface';
import { ApiTradeWithApprovalRequestListItemAltDto } from '../../../swagger/models/api-trade-with-approval-request-list-item';
import { adaptApiApprovalRequestStateEnum } from './api-approval-request-state-enum.adapter';
import { adaptApiDictionaryItem2AltDto } from './api-dictionary-item-2.adapter';
import { adaptApiMarketDealStateEnum } from './api-market-deal-state-enum.adapter';

export function adaptApiTradeWithApprovalRequestListItemAltDto(source?: TradeWithApprovalRequestListItemAlt | null): ApiTradeWithApprovalRequestListItemAltDto {
  return {
    ApprovalRequestState: adaptApiApprovalRequestStateEnum(source?.approvalRequestState),
    DeliveryKladrs: (source?.deliveryKladrs ?? []).map((item) => adaptApiDictionaryItem2AltDto(item)),
    FillingApplicationEndDate: source?.fillingApplicationEndDate,
    Id: source?.id,
    LotItemsCount: source?.lotItemsCount,
    Name: source?.name,
    Price: source?.price,
    State: adaptApiMarketDealStateEnum(source?.state),
    StateString: source?.stateString,
    WorkGroupsNames: source?.workGroupsNames ?? [],
  };
}
