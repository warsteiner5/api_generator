import { RatingQuestionOption } from '../../models/rating-question-option.interface';
import { ApiRatingQuestionOptionDto } from '../../../swagger/models/api-rating-question-option-dto';

export function adaptApiRatingQuestionOptionDto(source?: RatingQuestionOption | null): ApiRatingQuestionOptionDto {
  return {
    Id: source?.id,
    IsDeleted: source?.isDeleted,
    OptionText: source?.optionText,
    QuestionId: source?.questionId,
    Weight: source?.weight,
  };
}
