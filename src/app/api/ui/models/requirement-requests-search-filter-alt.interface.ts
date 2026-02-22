import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { KladrRegionCode } from './kladr-region-code.interface';
import { RequirementRequestStateEnum } from '../enums/requirement-request-state.enum';

// @ts-ignore
export interface RequirementRequestsSearchFilterAlt extends BaseFilterObjectAlt {
  keyWords: string;
  startDate: string;
  endDate: string;
  states: RequirementRequestStateEnum[];
  searchInMy: boolean;
  myOrganizationId: number;
  userId: number;
  kladrRegionCode: string;
  kladrRegionName: string;
  tenantId: number;
  isOnlyForSmsp: boolean;
}
