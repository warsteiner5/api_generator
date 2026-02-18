import { AdditionalRequirementDto2 } from '../../models/additional-requirement-dto-2.interface';
import { ApiAdditionalRequirementDto2 } from '../../../swagger/models/api-additional-requirement-dto-2';

export function adaptApiAdditionalRequirementDto2(source?: AdditionalRequirementDto2 | null): ApiAdditionalRequirementDto2 {
  return {
    Code: source?.code,
    Content: source?.content,
    Name: source?.name,
  };
}
