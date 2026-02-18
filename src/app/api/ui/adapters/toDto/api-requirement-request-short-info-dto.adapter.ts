import { RequirementRequestShortInfo } from '../../models/requirement-request-short-info.interface';
import { ApiRequirementRequestShortInfoDto } from '../../../swagger/models/api-requirement-request-short-info-dto';

export function adaptApiRequirementRequestShortInfoDto(source?: RequirementRequestShortInfo | null): ApiRequirementRequestShortInfoDto {
  return {
    Id: source?.id,
    Name: source?.name,
  };
}
