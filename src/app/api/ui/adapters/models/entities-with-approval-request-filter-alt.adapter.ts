import { ApiEntitiesWithApprovalRequestFilterAltDto } from '../../../swagger/models/api-entities-with-approval-request-filter';
import { EntitiesWithApprovalRequestFilterAlt } from '../../models/entities-with-approval-request-filter-alt.interface';
import { approvalRequestStateEnumAdapter } from '../enums/approval-request-state-enum.adapter';
import { baseFilterAltAdapter } from './base-filter-alt.adapter';
import { marketEntityTypeEnumAdapter } from '../enums/market-entity-type-enum.adapter';

export const entitiesWithApprovalRequestFilterAltAdapter = (source?: ApiEntitiesWithApprovalRequestFilterAltDto | null): EntitiesWithApprovalRequestFilterAlt => {
  return {
    ...baseFilterAltAdapter(source as unknown as Parameters<typeof baseFilterAltAdapter>[0]),
    approvalRequestStates: source?.ApprovalRequestStates?.map((item) => approvalRequestStateEnumAdapter(item)),
    entityType: source?.EntityType === null ? undefined : marketEntityTypeEnumAdapter(source?.EntityType),
    currentOrganizationId: source?.CurrentOrganizationId,
    currentUserWorkGroupIds: source?.CurrentUserWorkGroupIds,
  };
}
