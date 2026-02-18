/* tslint:disable */
/* eslint-disable */
import { ApiOrganizationFeedbackRatingDetailsDto } from '../models/api-organization-feedback-rating-details-dto';
export interface ApiParticipantRatingDetailsDto {
  IsAdmin?: boolean;
  OrganizationRatings?: Array<ApiOrganizationFeedbackRatingDetailsDto> | null;
  ParticipantAddress?: string | null;
  ParticipantInn?: string | null;
  ParticipantName?: string | null;
  Rating?: number;
}
