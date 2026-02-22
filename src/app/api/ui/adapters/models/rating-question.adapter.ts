import { ApiRatingQuestionDto } from '../../../swagger/models/api-rating-question-dto';
import { RatingQuestion } from '../../models/rating-question.interface';
import { ratingQuestionOptionAdapter } from './rating-question-option.adapter';

export const ratingQuestionAdapter = (source?: ApiRatingQuestionDto | null): RatingQuestion => {
  return {
    id: source?.Id,
    isDeleted: source?.IsDeleted,
    options: source?.Options?.map((item) => ratingQuestionOptionAdapter(item)),
    questionText: source?.QuestionText,
    tenantId: source?.TenantId,
  };
}
