import { ApiRequirementRequestShortInfoDto } from '../../../swagger/models/api-requirement-request-short-info-dto';
import { RequirementRequestShortInfo } from '../../models/requirement-request-short-info.interface';

export function adaptRequirementRequestShortInfoToUI(source?: ApiRequirementRequestShortInfoDto | null): RequirementRequestShortInfo {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
  };
}
