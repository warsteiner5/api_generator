import { ApiRatingQuestionAnswerDto } from '../../../swagger/models/api-rating-question-answer-dto';
import { RatingQuestionAnswer } from '../../models/rating-question-answer.interface';

export const ratingQuestionAnswerAdapter = (source?: ApiRatingQuestionAnswerDto | null): RatingQuestionAnswer => {
  return {
    optionId: source?.OptionId,
    questionId: source?.QuestionId,
  };
}
