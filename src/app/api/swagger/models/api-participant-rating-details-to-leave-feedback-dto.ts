/* tslint:disable */
/* eslint-disable */
import { ApiRatingQuestionDto } from '../models/api-rating-question-dto';
export interface ApiParticipantRatingDetailsToLeaveFeedbackDto {
  ParticipantAddress?: string | null;
  ParticipantInn?: string | null;
  ParticipantName?: string | null;
  Questions?: Array<ApiRatingQuestionDto> | null;
}
