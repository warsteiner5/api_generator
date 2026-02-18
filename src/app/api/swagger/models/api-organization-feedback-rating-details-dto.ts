/* tslint:disable */
/* eslint-disable */
import { ApiQuestionAnswerDto } from '../models/api-question-answer-dto';
export interface ApiOrganizationFeedbackRatingDetailsDto {
  IsDeleted?: boolean;
  QuestionsAnswers?: Array<ApiQuestionAnswerDto> | null;
  Rating?: number;
  SourceOrganizationId?: number;
  SourceOrganizationName?: string | null;
}
