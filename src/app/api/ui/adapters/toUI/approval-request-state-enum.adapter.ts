import { ApiApprovalRequestStateEnum } from '../../../swagger/models/api-approval-request-state-enum';
import { ApprovalRequestStateEnum } from '../../enums/approval-request-state.enum';

export function adaptApprovalRequestStateEnumToUI(source?: ApiApprovalRequestStateEnum | null): ApprovalRequestStateEnum {
  switch (source) {
    case ApiApprovalRequestStateEnum.SendForApprove:
      return ApprovalRequestStateEnum.SendForApprove;
    case ApiApprovalRequestStateEnum.Canceled:
      return ApprovalRequestStateEnum.Canceled;
    case ApiApprovalRequestStateEnum.Approved:
      return ApprovalRequestStateEnum.Approved;
    case ApiApprovalRequestStateEnum.Rejected:
      return ApprovalRequestStateEnum.Rejected;
    case ApiApprovalRequestStateEnum.Complete:
      return ApprovalRequestStateEnum.Complete;
    default:
      throw new Error(`Enum value is not defined: ApiApprovalRequestStateEnum=${String(source)}`);
  }
}
