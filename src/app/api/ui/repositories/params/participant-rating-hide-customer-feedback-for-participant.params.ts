import { OrganizationRating } from '../../models/organization-rating.interface';
import { ParticipantRatingHideCustomerFeedbackForParticipant$Params } from '../../../swagger/fn/participant-rating/participant-rating-hide-customer-feedback-for-participant';
import { apiOrganizationRatingDtoAdapter } from '../../adapters/models/api-organization-rating-dto.adapter';

// @ts-ignore
export interface ParticipantRatingHideCustomerFeedbackForParticipantParams {
  body?: OrganizationRating;
}

export function participantRatingHideCustomerFeedbackForParticipantAdapter(params?: ParticipantRatingHideCustomerFeedbackForParticipantParams): ParticipantRatingHideCustomerFeedbackForParticipant$Params {
  if (!params) {
    return {} as ParticipantRatingHideCustomerFeedbackForParticipant$Params;
  }
  return {
      body: apiOrganizationRatingDtoAdapter(params.body),
  };
}
