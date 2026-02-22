import { RatingQuestionAnswer } from '../../models/rating-question-answer.interface';
import { ApiRatingQuestionAnswerDto } from '../../../swagger/models/api-rating-question-answer-dto';

export const apiRatingQuestionAnswerDtoAdapter = (source?: RatingQuestionAnswer | null): ApiRatingQuestionAnswerDto => {
  return {
    OptionId: source?.optionId,
    QuestionId: source?.questionId,
  };
}
