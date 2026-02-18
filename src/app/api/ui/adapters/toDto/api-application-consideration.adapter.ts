import { ApplicationConsiderationAlt } from '../../models/application-consideration-alt.interface';
import { ApiApplicationConsiderationAltDto } from '../../../swagger/models/api-application-consideration';
import { adaptApiMeetsRequirementsEnum } from './api-meets-requirements-enum.adapter';

export function adaptApiApplicationConsiderationAltDto(source?: ApplicationConsiderationAlt | null): ApiApplicationConsiderationAltDto {
  return {
    Id: source?.id,
    MeetsRequirements: adaptApiMeetsRequirementsEnum(source?.meetsRequirements),
    RejectReasonComment: source?.rejectReasonComment,
  };
}
