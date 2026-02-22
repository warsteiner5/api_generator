import { ApplicationRejectionReason } from '../../models/application-rejection-reason.interface';
import { ApiApplicationRejectionReasonDto } from '../../../swagger/models/api-application-rejection-reason-dto';

export const apiApplicationRejectionReasonDtoAdapter = (source?: ApplicationRejectionReason | null): ApiApplicationRejectionReasonDto => {
  return {
    Id: source?.id,
    Reason: source?.reason,
    SortOrder: source?.sortOrder,
  };
}
