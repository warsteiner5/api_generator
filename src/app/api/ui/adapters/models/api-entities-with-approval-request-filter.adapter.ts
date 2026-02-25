import { EntitiesWithApprovalRequestFilterAlt } from '../../models/entities-with-approval-request-filter-alt.interface';
import { ApiEntitiesWithApprovalRequestFilterAltDto } from '../../../swagger/models/api-entities-with-approval-request-filter';
import { apiApprovalRequestStateEnumAdapter } from '../enums/api-approval-request-state-enum.adapter';
import { apiBaseFilterAltDtoAdapter } from './api-base-filter.adapter';
import { apiMarketEntityTypeEnumAdapter } from '../enums/api-market-entity-type-enum.adapter';

export const apiEntitiesWithApprovalRequestFilterAltDtoAdapter = (source?: EntitiesWithApprovalRequestFilterAlt | null): ApiEntitiesWithApprovalRequestFilterAltDto => {
  return {
    ...apiBaseFilterAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterAltDtoAdapter>[0]),
    ApprovalRequestStates: source?.approvalRequestStates?.map((item) => apiApprovalRequestStateEnumAdapter(item)),
    EntityType: source?.entityType === null ? undefined : apiMarketEntityTypeEnumAdapter(source?.entityType),
    CurrentOrganizationId: source?.currentOrganizationId,
    CurrentUserWorkGroupIds: source?.currentUserWorkGroupIds,
  };
}
