import { RequirementRequestsSearchFilterAlt } from '../../models/requirement-requests-search-filter-alt.interface';
import { ApiRequirementRequestsSearchFilterAltDto } from '../../../swagger/models/api-requirement-requests-search-filter';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';
import { apiRequirementRequestStateEnumAdapter } from '../enums/api-requirement-request-state-enum.adapter';

export const apiRequirementRequestsSearchFilterAltDtoAdapter = (source?: RequirementRequestsSearchFilterAlt | null): ApiRequirementRequestsSearchFilterAltDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    KeyWords: source?.keyWords,
    StartDate: source?.startDate,
    EndDate: source?.endDate,
    States: source?.states?.map((item) => apiRequirementRequestStateEnumAdapter(item)),
    SearchInMy: source?.searchInMy,
    MyOrganizationId: source?.myOrganizationId,
    UserId: source?.userId,
    KladrRegionCode: source?.kladrRegionCode,
    KladrRegionName: source?.kladrRegionName,
    TenantId: source?.tenantId,
    IsOnlyForSmsp: source?.isOnlyForSmsp,
  };
}
