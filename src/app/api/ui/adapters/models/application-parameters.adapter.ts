import { ApiApplicationParametersDto } from '../../../swagger/models/api-application-parameters-dto';
import { ApplicationParameters } from '../../models/application-parameters.interface';

export const applicationParametersAdapter = (source?: ApiApplicationParametersDto | null): ApplicationParameters => {
  return {
    applicationExists: source?.ApplicationExists,
    countApplications: source?.CountApplications,
    expires: source?.Expires,
    isHideParticipantName: source?.IsHideParticipantName,
    isHideParticipantsApplications: source?.IsHideParticipantsApplications,
    isHidePriceAndQuantity: source?.IsHidePriceAndQuantity,
  };
}
