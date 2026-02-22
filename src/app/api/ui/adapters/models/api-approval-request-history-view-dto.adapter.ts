import { ApprovalRequestHistoryView } from '../../models/approval-request-history-view.interface';
import { ApiApprovalRequestHistoryViewDto } from '../../../swagger/models/api-approval-request-history-view-dto';
import { apiApprovalRequestStateEnumAdapter } from '../enums/api-approval-request-state-enum.adapter';
import { apiUserFullNameAltDtoAdapter } from './api-user-full-name.adapter';

export const apiApprovalRequestHistoryViewDtoAdapter = (source?: ApprovalRequestHistoryView | null): ApiApprovalRequestHistoryViewDto => {
  return {
    Comment: source?.comment,
    DateTime: source?.dateTime,
    State: source?.state === null ? undefined : apiApprovalRequestStateEnumAdapter(source?.state),
    UserId: source?.userId,
    UserName: source?.userName === null ? undefined : apiUserFullNameAltDtoAdapter(source?.userName),
  };
}
