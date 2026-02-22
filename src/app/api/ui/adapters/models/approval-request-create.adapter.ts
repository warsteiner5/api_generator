import { ApiApprovalRequestCreateDto } from '../../../swagger/models/api-approval-request-create-dto';
import { ApprovalRequestCreate } from '../../models/approval-request-create.interface';

export const approvalRequestCreateAdapter = (source?: ApiApprovalRequestCreateDto | null): ApprovalRequestCreate => {
  return (source ?? {}) as ApprovalRequestCreate;
}
