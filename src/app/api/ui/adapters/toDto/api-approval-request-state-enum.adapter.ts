import { ApprovalRequestStateEnum } from '../../enums/approval-request-state.enum';
import { ApiApprovalRequestStateEnum } from '../../../swagger/models/api-approval-request-state-enum';

export function adaptApiApprovalRequestStateEnum(source?: ApprovalRequestStateEnum | null): ApiApprovalRequestStateEnum {
  switch (source) {
    case ApprovalRequestStateEnum.SendForApprove:
      return ApiApprovalRequestStateEnum.SendForApprove;
    case ApprovalRequestStateEnum.Canceled:
      return ApiApprovalRequestStateEnum.Canceled;
    case ApprovalRequestStateEnum.Approved:
      return ApiApprovalRequestStateEnum.Approved;
    case ApprovalRequestStateEnum.Rejected:
      return ApiApprovalRequestStateEnum.Rejected;
    case ApprovalRequestStateEnum.Complete:
      return ApiApprovalRequestStateEnum.Complete;
    default:
      throw new Error(`Enum value is not defined: ApprovalRequestStateEnum=${String(source)}`);
  }
}
