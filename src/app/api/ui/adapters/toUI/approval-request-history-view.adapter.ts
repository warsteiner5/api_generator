import { ApiApprovalRequestHistoryViewDto } from '../../../swagger/models/api-approval-request-history-view-dto';
import { ApprovalRequestHistoryView } from '../../models/approval-request-history-view.interface';
import { adaptApprovalRequestStateEnumToUI } from './approval-request-state-enum.adapter';
import { adaptUserFullNameAltToUI } from './user-full-name-alt.adapter';

export function adaptApprovalRequestHistoryViewToUI(source?: ApiApprovalRequestHistoryViewDto | null): ApprovalRequestHistoryView {
  return {
    comment: source?.Comment ?? '',
    dateTime: source?.DateTime ?? '',
    state: adaptApprovalRequestStateEnumToUI(source?.State),
    userId: source?.UserId ?? 0,
    userName: adaptUserFullNameAltToUI(source?.UserName),
  };
}
