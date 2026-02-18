import { AdditionalRequirementAlt } from '../../models/additional-requirement-alt.interface';
import { ApiAdditionalRequirementAltDto } from '../../../swagger/models/api-additional-requirement';

export function adaptApiAdditionalRequirementAltDto(source?: AdditionalRequirementAlt | null): ApiAdditionalRequirementAltDto {
  return {
    Code: source?.code,
    Content: source?.content,
    Name: source?.name,
  };
}
