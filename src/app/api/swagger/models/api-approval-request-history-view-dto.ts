/* tslint:disable */
/* eslint-disable */
import { ApiApprovalRequestStateEnum } from '../models/api-approval-request-state-enum';
import { ApiUserFullNameAltDto } from '../models/api-user-full-name';
export interface ApiApprovalRequestHistoryViewDto {
  Comment?: string | null;
  DateTime?: string;
  State?: ApiApprovalRequestStateEnum;
  UserId?: number;
  UserName?: ApiUserFullNameAltDto | null;
}
