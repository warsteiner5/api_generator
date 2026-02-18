/* tslint:disable */
/* eslint-disable */
import { ApiApprovalRequestStateEnum } from '../models/api-approval-request-state-enum';
import { ApiBaseFilterAltDto } from '../models/api-base-filter';
import { ApiMarketEntityTypeEnum } from '../models/api-market-entity-type-enum';
export type ApiEntitiesWithApprovalRequestFilterAltDto = ApiBaseFilterAltDto & {
'ApprovalRequestStates'?: Array<ApiApprovalRequestStateEnum> | null;
'EntityType'?: ApiMarketEntityTypeEnum | null;
'CurrentOrganizationId'?: number | null;
'CurrentUserWorkGroupIds'?: Array<number> | null;
};
