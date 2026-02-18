import { ApiApplicationReviewDto } from '../../../swagger/models/api-application-review-dto';
import { ApplicationReview } from '../../models/application-review.interface';
import { adaptManufactureTypeEnumToUI } from './manufacture-type-enum.adapter';
import { adaptMeetsRequirementsEnumToUI } from './meets-requirements-enum.adapter';

export function adaptApplicationReviewToUI(source?: ApiApplicationReviewDto | null): ApplicationReview {
  return {
    id: source?.Id ?? 0,
    incomplianceWithTheRequirementsReason: source?.IncomplianceWithTheRequirementsReason ?? '',
    lotItemApplicationId: source?.LotItemApplicationId ?? 0,
    manufactureType: adaptManufactureTypeEnumToUI(source?.ManufactureType),
    meetsRequirements: adaptMeetsRequirementsEnumToUI(source?.MeetsRequirements),
    rankNumber: source?.RankNumber ?? 0,
    rejectReasonComment: source?.RejectReasonComment ?? '',
  };
}
