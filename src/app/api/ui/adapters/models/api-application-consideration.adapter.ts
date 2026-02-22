import { ApplicationConsiderationAlt } from '../../models/application-consideration-alt.interface';
import { ApiApplicationConsiderationAltDto } from '../../../swagger/models/api-application-consideration';
import { apiMeetsRequirementsEnumAdapter } from '../enums/api-meets-requirements-enum.adapter';

export const apiApplicationConsiderationAltDtoAdapter = (source?: ApplicationConsiderationAlt | null): ApiApplicationConsiderationAltDto => {
  return {
    Id: source?.id,
    MeetsRequirements: source?.meetsRequirements === null ? undefined : apiMeetsRequirementsEnumAdapter(source?.meetsRequirements),
    RejectReasonComment: source?.rejectReasonComment,
  };
}
