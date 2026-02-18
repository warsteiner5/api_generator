import { ApiAdditionalRequirementAltDto } from '../../../swagger/models/api-additional-requirement';
import { AdditionalRequirementAlt } from '../../models/additional-requirement-alt.interface';

export function adaptAdditionalRequirementAltToUI(source?: ApiAdditionalRequirementAltDto | null): AdditionalRequirementAlt {
  return {
    code: source?.Code ?? 0,
    content: source?.Content ?? '',
    name: source?.Name ?? '',
  };
}
