import { ApiQuestionAnswerDto } from '../../../swagger/models/api-question-answer-dto';
import { QuestionAnswer } from '../../models/question-answer.interface';

export const questionAnswerAdapter = (source?: ApiQuestionAnswerDto | null): QuestionAnswer => {
  return {
    isDeleted: source?.IsDeleted,
    optionText: source?.OptionText,
    questionText: source?.QuestionText,
  };
}
