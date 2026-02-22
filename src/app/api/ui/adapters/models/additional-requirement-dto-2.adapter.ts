import { ApiAdditionalRequirementDto2 } from '../../../swagger/models/api-additional-requirement-dto-2';
import { AdditionalRequirementDto2 } from '../../models/additional-requirement-dto-2.interface';

export const additionalRequirementDto2Adapter = (source?: ApiAdditionalRequirementDto2 | null): AdditionalRequirementDto2 => {
  return {
    code: source?.Code,
    content: source?.Content,
    name: source?.Name,
  };
}
