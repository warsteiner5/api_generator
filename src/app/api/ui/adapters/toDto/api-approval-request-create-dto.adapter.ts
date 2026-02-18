import { ApprovalRequestCreate } from '../../models/approval-request-create.interface';
import { ApiApprovalRequestCreateDto } from '../../../swagger/models/api-approval-request-create-dto';

export function adaptApiApprovalRequestCreateDto(source?: ApprovalRequestCreate | null): ApiApprovalRequestCreateDto {
  return (source ?? {}) as ApiApprovalRequestCreateDto;
}
