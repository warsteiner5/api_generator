import { ApplicationParameters } from '../../models/application-parameters.interface';
import { ApiApplicationParametersDto } from '../../../swagger/models/api-application-parameters-dto';

export const apiApplicationParametersDtoAdapter = (source?: ApplicationParameters | null): ApiApplicationParametersDto => {
  return {
    ApplicationExists: source?.applicationExists,
    CountApplications: source?.countApplications,
    Expires: source?.expires,
    IsHideParticipantName: source?.isHideParticipantName,
    IsHideParticipantsApplications: source?.isHideParticipantsApplications,
    IsHidePriceAndQuantity: source?.isHidePriceAndQuantity,
  };
}
