/* tslint:disable */
/* eslint-disable */
import { ApiRatingQuestionOptionDto } from '../models/api-rating-question-option-dto';
export interface ApiRatingQuestionDto {
  Id?: number;
  IsDeleted?: boolean;
  Options?: Array<ApiRatingQuestionOptionDto> | null;
  QuestionText?: string | null;
  TenantId?: number | null;
}
