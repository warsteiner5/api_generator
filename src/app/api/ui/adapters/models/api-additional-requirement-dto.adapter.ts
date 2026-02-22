import { AdditionalRequirement } from '../../models/additional-requirement.interface';
import { ApiAdditionalRequirementDto } from '../../../swagger/models/api-additional-requirement-dto';

export const apiAdditionalRequirementDtoAdapter = (source?: AdditionalRequirement | null): ApiAdditionalRequirementDto => {
  return {
    Code: source?.code,
    Content: source?.content,
    Name: source?.name,
  };
}
