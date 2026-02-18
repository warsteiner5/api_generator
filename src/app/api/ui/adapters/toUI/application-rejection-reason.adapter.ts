import { ApiApplicationRejectionReasonDto } from '../../../swagger/models/api-application-rejection-reason-dto';
import { ApplicationRejectionReason } from '../../models/application-rejection-reason.interface';

export function adaptApplicationRejectionReasonToUI(source?: ApiApplicationRejectionReasonDto | null): ApplicationRejectionReason {
  return {
    id: source?.Id ?? 0,
    reason: source?.Reason ?? '',
    sortOrder: source?.SortOrder ?? 0,
  };
}
