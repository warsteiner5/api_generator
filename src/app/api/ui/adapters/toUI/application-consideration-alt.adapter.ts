import { ApiApplicationConsiderationAltDto } from '../../../swagger/models/api-application-consideration';
import { ApplicationConsiderationAlt } from '../../models/application-consideration-alt.interface';
import { adaptMeetsRequirementsEnumToUI } from './meets-requirements-enum.adapter';

export function adaptApplicationConsiderationAltToUI(source?: ApiApplicationConsiderationAltDto | null): ApplicationConsiderationAlt {
  return {
    id: source?.Id ?? 0,
    meetsRequirements: adaptMeetsRequirementsEnumToUI(source?.MeetsRequirements),
    rejectReasonComment: source?.RejectReasonComment ?? '',
  };
}
