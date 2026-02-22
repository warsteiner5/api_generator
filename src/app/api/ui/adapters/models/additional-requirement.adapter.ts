import { ApiAdditionalRequirementDto } from '../../../swagger/models/api-additional-requirement-dto';
import { AdditionalRequirement } from '../../models/additional-requirement.interface';

export const additionalRequirementAdapter = (source?: ApiAdditionalRequirementDto | null): AdditionalRequirement => {
  return {
    code: source?.Code,
    content: source?.Content,
    name: source?.Name,
  };
}
