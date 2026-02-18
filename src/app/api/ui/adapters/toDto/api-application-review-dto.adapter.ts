import { ApplicationReview } from '../../models/application-review.interface';
import { ApiApplicationReviewDto } from '../../../swagger/models/api-application-review-dto';
import { adaptApiManufactureTypeEnum } from './api-manufacture-type-enum.adapter';
import { adaptApiMeetsRequirementsEnum } from './api-meets-requirements-enum.adapter';

export function adaptApiApplicationReviewDto(source?: ApplicationReview | null): ApiApplicationReviewDto {
  return {
    Id: source?.id,
    IncomplianceWithTheRequirementsReason: source?.incomplianceWithTheRequirementsReason,
    LotItemApplicationId: source?.lotItemApplicationId,
    ManufactureType: adaptApiManufactureTypeEnum(source?.manufactureType),
    MeetsRequirements: adaptApiMeetsRequirementsEnum(source?.meetsRequirements),
    RankNumber: source?.rankNumber,
    RejectReasonComment: source?.rejectReasonComment,
  };
}
