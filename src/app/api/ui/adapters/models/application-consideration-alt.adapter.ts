import { ApiApplicationConsiderationAltDto } from '../../../swagger/models/api-application-consideration';
import { ApplicationConsiderationAlt } from '../../models/application-consideration-alt.interface';
import { meetsRequirementsEnumAdapter } from '../enums/meets-requirements-enum.adapter';

export const applicationConsiderationAltAdapter = (source?: ApiApplicationConsiderationAltDto | null): ApplicationConsiderationAlt => {
  return {
    id: source?.Id,
    meetsRequirements: source?.MeetsRequirements === null ? undefined : meetsRequirementsEnumAdapter(source?.MeetsRequirements),
    rejectReasonComment: source?.RejectReasonComment,
  };
}
