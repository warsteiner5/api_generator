import { ApiAdditionalRequirementAltDto } from '../../../swagger/models/api-additional-requirement';
import { AdditionalRequirementAlt } from '../../models/additional-requirement-alt.interface';

export const additionalRequirementAltAdapter = (source?: ApiAdditionalRequirementAltDto | null): AdditionalRequirementAlt => {
  return {
    code: source?.Code,
    content: source?.Content,
    name: source?.Name,
  };
}
