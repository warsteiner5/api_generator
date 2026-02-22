import { ApiApplicationReviewDto } from '../../../swagger/models/api-application-review-dto';
import { ApplicationReview } from '../../models/application-review.interface';
import { manufactureTypeEnumAdapter } from '../enums/manufacture-type-enum.adapter';
import { meetsRequirementsEnumAdapter } from '../enums/meets-requirements-enum.adapter';

export const applicationReviewAdapter = (source?: ApiApplicationReviewDto | null): ApplicationReview => {
  return {
    id: source?.Id,
    incomplianceWithTheRequirementsReason: source?.IncomplianceWithTheRequirementsReason,
    lotItemApplicationId: source?.LotItemApplicationId,
    manufactureType: source?.ManufactureType === null ? undefined : manufactureTypeEnumAdapter(source?.ManufactureType),
    meetsRequirements: source?.MeetsRequirements === null ? undefined : meetsRequirementsEnumAdapter(source?.MeetsRequirements),
    rankNumber: source?.RankNumber,
    rejectReasonComment: source?.RejectReasonComment,
  };
}
