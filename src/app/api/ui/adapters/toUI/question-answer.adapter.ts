import { ApiQuestionAnswerDto } from '../../../swagger/models/api-question-answer-dto';
import { QuestionAnswer } from '../../models/question-answer.interface';

export function adaptQuestionAnswerToUI(source?: ApiQuestionAnswerDto | null): QuestionAnswer {
  return {
    isDeleted: source?.IsDeleted ?? false,
    optionText: source?.OptionText ?? '',
    questionText: source?.QuestionText ?? '',
  };
}
