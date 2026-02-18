import { ApiApprovalRequestGetOrCreateRequestAltDto } from '../../../swagger/models/api-approval-request-get-or-create-request';
import { ApprovalRequestGetOrCreateRequestAlt } from '../../models/approval-request-get-or-create-request-alt.interface';
import { adaptMarketEntityTypeEnumToUI } from './market-entity-type-enum.adapter';

export function adaptApprovalRequestGetOrCreateRequestAltToUI(source?: ApiApprovalRequestGetOrCreateRequestAltDto | null): ApprovalRequestGetOrCreateRequestAlt {
  return {
    entityId: source?.EntityId ?? 0,
    entityType: adaptMarketEntityTypeEnumToUI(source?.EntityType),
  };
}
