import { ApiEntitiesWithApprovalRequestFilterAltDto } from '../../../swagger/models/api-entities-with-approval-request-filter';
import { EntitiesWithApprovalRequestFilterAlt } from '../../models/entities-with-approval-request-filter-alt.interface';

export const entitiesWithApprovalRequestFilterAltAdapter = (source?: ApiEntitiesWithApprovalRequestFilterAltDto | null): EntitiesWithApprovalRequestFilterAlt => {
  return (source ?? {}) as EntitiesWithApprovalRequestFilterAlt;
}
