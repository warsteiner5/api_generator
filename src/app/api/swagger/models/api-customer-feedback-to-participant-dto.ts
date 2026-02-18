/* tslint:disable */
/* eslint-disable */
import { ApiRatingQuestionAnswerDto } from '../models/api-rating-question-answer-dto';
export interface ApiCustomerFeedbackToParticipantDto {
  Answers?: Array<ApiRatingQuestionAnswerDto> | null;
  TargetParticipantOrgId?: number;
}
