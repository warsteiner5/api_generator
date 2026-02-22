import { ApiApprovalRequestGetOrCreateRequestAltDto } from '../../../swagger/models/api-approval-request-get-or-create-request';
import { ApprovalRequestGetOrCreateRequestAlt } from '../../models/approval-request-get-or-create-request-alt.interface';
import { marketEntityTypeEnumAdapter } from '../enums/market-entity-type-enum.adapter';

export const approvalRequestGetOrCreateRequestAltAdapter = (source?: ApiApprovalRequestGetOrCreateRequestAltDto | null): ApprovalRequestGetOrCreateRequestAlt => {
  return {
    entityId: source?.EntityId,
    entityType: source?.EntityType === null ? undefined : marketEntityTypeEnumAdapter(source?.EntityType),
  };
}
