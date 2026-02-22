import { ApprovalRequestGetOrCreateRequestAlt } from '../../models/approval-request-get-or-create-request-alt.interface';
import { ApiApprovalRequestGetOrCreateRequestAltDto } from '../../../swagger/models/api-approval-request-get-or-create-request';
import { apiMarketEntityTypeEnumAdapter } from '../enums/api-market-entity-type-enum.adapter';

export const apiApprovalRequestGetOrCreateRequestAltDtoAdapter = (source?: ApprovalRequestGetOrCreateRequestAlt | null): ApiApprovalRequestGetOrCreateRequestAltDto => {
  return {
    EntityId: source?.entityId,
    EntityType: source?.entityType === null ? undefined : apiMarketEntityTypeEnumAdapter(source?.entityType),
  };
}
