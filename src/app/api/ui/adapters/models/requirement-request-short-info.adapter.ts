import { ApiRequirementRequestShortInfoDto } from '../../../swagger/models/api-requirement-request-short-info-dto';
import { RequirementRequestShortInfo } from '../../models/requirement-request-short-info.interface';

export const requirementRequestShortInfoAdapter = (source?: ApiRequirementRequestShortInfoDto | null): RequirementRequestShortInfo => {
  return {
    id: source?.Id,
    name: source?.Name,
  };
}
