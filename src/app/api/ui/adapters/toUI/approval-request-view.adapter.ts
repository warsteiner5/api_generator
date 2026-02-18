import { ApiApprovalRequestViewDto } from '../../../swagger/models/api-approval-request-view-dto';
import { ApprovalRequestView } from '../../models/approval-request-view.interface';
import { adaptApprovalRequestHistoryViewToUI } from './approval-request-history-view.adapter';
import { adaptApprovalRequestStateEnumToUI } from './approval-request-state-enum.adapter';
import { adaptMarketEntityTypeEnumToUI } from './market-entity-type-enum.adapter';

export function adaptApprovalRequestViewToUI(source?: ApiApprovalRequestViewDto | null): ApprovalRequestView {
  return {
    entityId: source?.EntityId ?? 0,
    entityType: adaptMarketEntityTypeEnumToUI(source?.EntityType),
    history: (source?.History ?? []).map((item) => adaptApprovalRequestHistoryViewToUI(item)),
    id: source?.Id ?? 0,
    state: adaptApprovalRequestStateEnumToUI(source?.State),
  };
}
