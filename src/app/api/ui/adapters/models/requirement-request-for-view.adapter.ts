import { ApiRequirementRequestForViewDto } from '../../../swagger/models/api-requirement-request-for-view-dto';
import { RequirementRequestForView } from '../../models/requirement-request-for-view.interface';
import { requirementRequestAdapter } from './requirement-request.adapter';

export const requirementRequestForViewAdapter = (source?: ApiRequirementRequestForViewDto | null): RequirementRequestForView => {
  return {
    ...requirementRequestAdapter(source as unknown as Parameters<typeof requirementRequestAdapter>[0]),
    priceMin: source?.PriceMin,
    priceMax: source?.PriceMax,
    priceAverage: source?.PriceAverage,
    shortOkeiName: source?.ShortOkeiName,
    isEditRequirementRequestAvailable: source?.IsEditRequirementRequestAvailable,
    approvedCharacteristicsCount: source?.ApprovedCharacteristicsCount,
    rejectedCharacteristicsCount: source?.RejectedCharacteristicsCount,
    considerationCharacteristicsCount: source?.ConsiderationCharacteristicsCount,
    competetiveListItemCount: source?.CompetetiveListItemCount,
  };
}
