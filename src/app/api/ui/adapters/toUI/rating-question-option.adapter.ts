import { ApiRatingQuestionOptionDto } from '../../../swagger/models/api-rating-question-option-dto';
import { RatingQuestionOption } from '../../models/rating-question-option.interface';

export function adaptRatingQuestionOptionToUI(source?: ApiRatingQuestionOptionDto | null): RatingQuestionOption {
  return {
    id: source?.Id ?? 0,
    isDeleted: source?.IsDeleted ?? false,
    optionText: source?.OptionText ?? '',
    questionId: source?.QuestionId ?? 0,
    weight: source?.Weight ?? 0,
  };
}
