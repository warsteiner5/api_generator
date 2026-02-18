import { ApprovalRequestHistoryView } from '../../models/approval-request-history-view.interface';
import { ApiApprovalRequestHistoryViewDto } from '../../../swagger/models/api-approval-request-history-view-dto';
import { adaptApiApprovalRequestStateEnum } from './api-approval-request-state-enum.adapter';
import { adaptApiUserFullNameAltDto } from './api-user-full-name.adapter';

export function adaptApiApprovalRequestHistoryViewDto(source?: ApprovalRequestHistoryView | null): ApiApprovalRequestHistoryViewDto {
  return {
    Comment: source?.comment,
    DateTime: source?.dateTime,
    State: adaptApiApprovalRequestStateEnum(source?.state),
    UserId: source?.userId,
    UserName: adaptApiUserFullNameAltDto(source?.userName),
  };
}
