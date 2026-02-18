import { ApiRequirementRequestForViewDto } from '../../../swagger/models/api-requirement-request-for-view-dto';
import { RequirementRequestForView } from '../../models/requirement-request-for-view.interface';

export function adaptRequirementRequestForViewToUI(source?: ApiRequirementRequestForViewDto | null): RequirementRequestForView {
  return (source ?? {}) as RequirementRequestForView;
}
