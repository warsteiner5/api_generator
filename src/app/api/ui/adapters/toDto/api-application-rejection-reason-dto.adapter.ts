import { ApplicationRejectionReason } from '../../models/application-rejection-reason.interface';
import { ApiApplicationRejectionReasonDto } from '../../../swagger/models/api-application-rejection-reason-dto';

export function adaptApiApplicationRejectionReasonDto(source?: ApplicationRejectionReason | null): ApiApplicationRejectionReasonDto {
  return {
    Id: source?.id,
    Reason: source?.reason,
    SortOrder: source?.sortOrder,
  };
}
