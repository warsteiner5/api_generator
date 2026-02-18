import { ApiApplicationParametersDto } from '../../../swagger/models/api-application-parameters-dto';
import { ApplicationParameters } from '../../models/application-parameters.interface';

export function adaptApplicationParametersToUI(source?: ApiApplicationParametersDto | null): ApplicationParameters {
  return {
    applicationExists: source?.ApplicationExists ?? false,
    countApplications: source?.CountApplications ?? 0,
    expires: source?.Expires ?? '',
    isHideParticipantName: source?.IsHideParticipantName ?? false,
    isHideParticipantsApplications: source?.IsHideParticipantsApplications ?? false,
    isHidePriceAndQuantity: source?.IsHidePriceAndQuantity ?? false,
  };
}
