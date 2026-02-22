import { EntitiesWithApprovalRequestFilterAlt } from '../../models/entities-with-approval-request-filter-alt.interface';
import { ApiEntitiesWithApprovalRequestFilterAltDto } from '../../../swagger/models/api-entities-with-approval-request-filter';

export const apiEntitiesWithApprovalRequestFilterAltDtoAdapter = (source?: EntitiesWithApprovalRequestFilterAlt | null): ApiEntitiesWithApprovalRequestFilterAltDto => {
  return (source ?? {}) as ApiEntitiesWithApprovalRequestFilterAltDto;
}
