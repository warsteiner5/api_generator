import { ApiApprovalRequestViewDto } from '../../../swagger/models/api-approval-request-view-dto';
import { ApprovalRequestView } from '../../models/approval-request-view.interface';
import { approvalRequestHistoryViewAdapter } from './approval-request-history-view.adapter';
import { approvalRequestStateEnumAdapter } from '../enums/approval-request-state-enum.adapter';
import { marketEntityTypeEnumAdapter } from '../enums/market-entity-type-enum.adapter';

export const approvalRequestViewAdapter = (source?: ApiApprovalRequestViewDto | null): ApprovalRequestView => {
  return {
    entityId: source?.EntityId,
    entityType: source?.EntityType === null ? undefined : marketEntityTypeEnumAdapter(source?.EntityType),
    history: source?.History?.map((item) => approvalRequestHistoryViewAdapter(item)),
    id: source?.Id,
    state: source?.State === null ? undefined : approvalRequestStateEnumAdapter(source?.State),
  };
}
