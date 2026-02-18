import { ApiRatingQuestionAnswerDto } from '../../../swagger/models/api-rating-question-answer-dto';
import { RatingQuestionAnswer } from '../../models/rating-question-answer.interface';

export function adaptRatingQuestionAnswerToUI(source?: ApiRatingQuestionAnswerDto | null): RatingQuestionAnswer {
  return {
    optionId: source?.OptionId ?? 0,
    questionId: source?.QuestionId ?? 0,
  };
}
