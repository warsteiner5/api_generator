import { ApiAdditionalRequirementDto } from '../../../swagger/models/api-additional-requirement-dto';
import { AdditionalRequirement } from '../../models/additional-requirement.interface';

export function adaptAdditionalRequirementToUI(source?: ApiAdditionalRequirementDto | null): AdditionalRequirement {
  return {
    code: source?.Code ?? 0,
    content: source?.Content ?? '',
    name: source?.Name ?? '',
  };
}
