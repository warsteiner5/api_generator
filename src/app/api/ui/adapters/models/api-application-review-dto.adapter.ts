import { ApplicationReview } from '../../models/application-review.interface';
import { ApiApplicationReviewDto } from '../../../swagger/models/api-application-review-dto';
import { apiManufactureTypeEnumAdapter } from '../enums/api-manufacture-type-enum.adapter';
import { apiMeetsRequirementsEnumAdapter } from '../enums/api-meets-requirements-enum.adapter';

export const apiApplicationReviewDtoAdapter = (source?: ApplicationReview | null): ApiApplicationReviewDto => {
  return {
    Id: source?.id,
    IncomplianceWithTheRequirementsReason: source?.incomplianceWithTheRequirementsReason,
    LotItemApplicationId: source?.lotItemApplicationId,
    ManufactureType: source?.manufactureType === null ? undefined : apiManufactureTypeEnumAdapter(source?.manufactureType),
    MeetsRequirements: source?.meetsRequirements === null ? undefined : apiMeetsRequirementsEnumAdapter(source?.meetsRequirements),
    RankNumber: source?.rankNumber,
    RejectReasonComment: source?.rejectReasonComment,
  };
}
