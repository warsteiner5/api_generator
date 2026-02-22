import { RequirementRequestForView } from '../../models/requirement-request-for-view.interface';
import { ApiRequirementRequestForViewDto } from '../../../swagger/models/api-requirement-request-for-view-dto';

export const apiRequirementRequestForViewDtoAdapter = (source?: RequirementRequestForView | null): ApiRequirementRequestForViewDto => {
  return (source ?? {}) as ApiRequirementRequestForViewDto;
}
