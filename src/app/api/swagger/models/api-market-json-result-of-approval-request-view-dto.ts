/* tslint:disable */
/* eslint-disable */
import { ApiApprovalRequestViewDto } from '../models/api-approval-request-view-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfApprovalRequestViewDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiApprovalRequestViewDto | null;
};
