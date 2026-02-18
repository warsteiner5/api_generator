/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
import { ApiRequirementRequestStateEnum } from '../models/api-requirement-request-state-enum';
export type ApiRequirementRequestsSearchFilterAltDto = ApiBaseFilterObjectAltDto & {
'KeyWords'?: string | null;
'StartDate'?: string | null;
'EndDate'?: string | null;
'States'?: Array<ApiRequirementRequestStateEnum> | null;
'SearchInMy'?: boolean;
'MyOrganizationId'?: number | null;
'UserId'?: number | null;
'KladrRegionCode'?: string | null;
'KladrRegionName'?: string | null;
'TenantId'?: number;
'IsOnlyForSmsp'?: boolean | null;
};
