/* tslint:disable */
/* eslint-disable */
import { ApiApprovalRequestStateEnum } from '../models/api-approval-request-state-enum';
import { ApiDictionaryItem2AltDto } from '../models/api-dictionary-item-2';
import { ApiMarketDealStateEnum } from '../models/api-market-deal-state-enum';
export interface ApiTradeWithApprovalRequestListItemAltDto {
  ApprovalRequestState?: ApiApprovalRequestStateEnum;
  DeliveryKladrs?: Array<ApiDictionaryItem2AltDto> | null;
  FillingApplicationEndDate?: string | null;
  Id?: number;
  LotItemsCount?: number;
  Name?: string | null;
  Price?: number;
  State?: ApiMarketDealStateEnum;
  StateString?: string | null;
  WorkGroupsNames?: Array<string> | null;
}
