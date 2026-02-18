import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { KladrRegionCode } from './kladr-region-code.interface';
import { RequirementRequestStateEnum } from '../enums/requirement-request-state.enum';

export type RequirementRequestsSearchFilterAlt = BaseFilterObjectAlt & { 'KeyWords'?: string | null; 'StartDate'?: string | null; 'EndDate'?: string | null; 'States'?: Array<RequirementRequestStateEnum> | null; 'SearchInMy'?: boolean; 'MyOrganizationId'?: number | null; 'UserId'?: number | null; 'KladrRegionCode'?: string | null; 'KladrRegionName'?: string | null; 'TenantId'?: number; 'IsOnlyForSmsp'?: boolean | null; };
