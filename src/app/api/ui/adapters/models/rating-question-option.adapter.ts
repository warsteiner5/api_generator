import { ApiRatingQuestionOptionDto } from '../../../swagger/models/api-rating-question-option-dto';
import { RatingQuestionOption } from '../../models/rating-question-option.interface';

export const ratingQuestionOptionAdapter = (source?: ApiRatingQuestionOptionDto | null): RatingQuestionOption => {
  return {
    id: source?.Id,
    isDeleted: source?.IsDeleted,
    optionText: source?.OptionText,
    questionId: source?.QuestionId,
    weight: source?.Weight,
  };
}
