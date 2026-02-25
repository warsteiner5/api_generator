import { RequirementRequestForView } from '../../models/requirement-request-for-view.interface';
import { ApiRequirementRequestForViewDto } from '../../../swagger/models/api-requirement-request-for-view-dto';
import { apiRequirementRequestDtoAdapter } from './api-requirement-request-dto.adapter';

export const apiRequirementRequestForViewDtoAdapter = (source?: RequirementRequestForView | null): ApiRequirementRequestForViewDto => {
  return {
    ...apiRequirementRequestDtoAdapter(source as unknown as Parameters<typeof apiRequirementRequestDtoAdapter>[0]),
    PriceMin: source?.priceMin,
    PriceMax: source?.priceMax,
    PriceAverage: source?.priceAverage,
    ShortOkeiName: source?.shortOkeiName,
    IsEditRequirementRequestAvailable: source?.isEditRequirementRequestAvailable,
    ApprovedCharacteristicsCount: source?.approvedCharacteristicsCount,
    RejectedCharacteristicsCount: source?.rejectedCharacteristicsCount,
    ConsiderationCharacteristicsCount: source?.considerationCharacteristicsCount,
    CompetetiveListItemCount: source?.competetiveListItemCount,
  };
}
