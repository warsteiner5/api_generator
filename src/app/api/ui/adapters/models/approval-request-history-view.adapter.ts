import { ApiApprovalRequestHistoryViewDto } from '../../../swagger/models/api-approval-request-history-view-dto';
import { ApprovalRequestHistoryView } from '../../models/approval-request-history-view.interface';
import { approvalRequestStateEnumAdapter } from '../enums/approval-request-state-enum.adapter';
import { userFullNameAltAdapter } from './user-full-name-alt.adapter';

export const approvalRequestHistoryViewAdapter = (source?: ApiApprovalRequestHistoryViewDto | null): ApprovalRequestHistoryView => {
  return {
    comment: source?.Comment,
    dateTime: source?.DateTime,
    state: source?.State === null ? undefined : approvalRequestStateEnumAdapter(source?.State),
    userId: source?.UserId,
    userName: source?.UserName === null ? undefined : userFullNameAltAdapter(source?.UserName),
  };
}
