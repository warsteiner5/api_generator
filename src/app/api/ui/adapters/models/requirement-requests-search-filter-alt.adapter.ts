import { ApiRequirementRequestsSearchFilterAltDto } from '../../../swagger/models/api-requirement-requests-search-filter';
import { RequirementRequestsSearchFilterAlt } from '../../models/requirement-requests-search-filter-alt.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';
import { requirementRequestStateEnumAdapter } from '../enums/requirement-request-state-enum.adapter';

export const requirementRequestsSearchFilterAltAdapter = (source?: ApiRequirementRequestsSearchFilterAltDto | null): RequirementRequestsSearchFilterAlt => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    keyWords: source?.KeyWords,
    startDate: source?.StartDate,
    endDate: source?.EndDate,
    states: source?.States?.map((item) => requirementRequestStateEnumAdapter(item)),
    searchInMy: source?.SearchInMy,
    myOrganizationId: source?.MyOrganizationId,
    userId: source?.UserId,
    kladrRegionCode: source?.KladrRegionCode,
    kladrRegionName: source?.KladrRegionName,
    tenantId: source?.TenantId,
    isOnlyForSmsp: source?.IsOnlyForSmsp,
  };
}
