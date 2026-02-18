/* tslint:disable */
/* eslint-disable */
import { ApiApprovalRequestHistoryViewDto } from '../models/api-approval-request-history-view-dto';
import { ApiApprovalRequestStateEnum } from '../models/api-approval-request-state-enum';
import { ApiMarketEntityTypeEnum } from '../models/api-market-entity-type-enum';
export interface ApiApprovalRequestViewDto {
  EntityId?: number;
  EntityType?: ApiMarketEntityTypeEnum;
  History?: Array<ApiApprovalRequestHistoryViewDto> | null;
  Id?: number;
  State?: ApiApprovalRequestStateEnum;
}
