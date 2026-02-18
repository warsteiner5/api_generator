import { ApiRatingQuestionDto } from '../../../swagger/models/api-rating-question-dto';
import { RatingQuestion } from '../../models/rating-question.interface';
import { adaptRatingQuestionOptionToUI } from './rating-question-option.adapter';

export function adaptRatingQuestionToUI(source?: ApiRatingQuestionDto | null): RatingQuestion {
  return {
    id: source?.Id ?? 0,
    isDeleted: source?.IsDeleted ?? false,
    options: (source?.Options ?? []).map((item) => adaptRatingQuestionOptionToUI(item)),
    questionText: source?.QuestionText ?? '',
    tenantId: source?.TenantId ?? 0,
  };
}
