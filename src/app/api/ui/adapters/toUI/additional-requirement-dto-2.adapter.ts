import { ApiAdditionalRequirementDto2 } from '../../../swagger/models/api-additional-requirement-dto-2';
import { AdditionalRequirementDto2 } from '../../models/additional-requirement-dto-2.interface';

export function adaptAdditionalRequirementDto2ToUI(source?: ApiAdditionalRequirementDto2 | null): AdditionalRequirementDto2 {
  return {
    code: source?.Code ?? 0,
    content: source?.Content ?? '',
    name: source?.Name ?? '',
  };
}
