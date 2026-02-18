import { QuestionAnswer } from '../../models/question-answer.interface';
import { ApiQuestionAnswerDto } from '../../../swagger/models/api-question-answer-dto';

export function adaptApiQuestionAnswerDto(source?: QuestionAnswer | null): ApiQuestionAnswerDto {
  return {
    IsDeleted: source?.isDeleted,
    OptionText: source?.optionText,
    QuestionText: source?.questionText,
  };
}
