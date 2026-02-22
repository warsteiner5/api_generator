import { ApiApplicationRejectionReasonDto } from '../../../swagger/models/api-application-rejection-reason-dto';
import { ApplicationRejectionReason } from '../../models/application-rejection-reason.interface';

export const applicationRejectionReasonAdapter = (source?: ApiApplicationRejectionReasonDto | null): ApplicationRejectionReason => {
  return {
    id: source?.Id,
    reason: source?.Reason,
    sortOrder: source?.SortOrder,
  };
}
