import { OrganizationRating } from '../../models/organization-rating.interface';
import { ParticipantRatingShowCustomerFeedbackForParticipant$Params } from '../../../swagger/fn/participant-rating/participant-rating-show-customer-feedback-for-participant';
import { apiOrganizationRatingDtoAdapter } from '../../adapters/models/api-organization-rating-dto.adapter';

// @ts-ignore
export interface ParticipantRatingShowCustomerFeedbackForParticipantParams {
  body?: OrganizationRating;
}

export function participantRatingShowCustomerFeedbackForParticipantAdapter(params?: ParticipantRatingShowCustomerFeedbackForParticipantParams): ParticipantRatingShowCustomerFeedbackForParticipant$Params {
  if (!params) {
    return {} as ParticipantRatingShowCustomerFeedbackForParticipant$Params;
  }
  return {
      body: apiOrganizationRatingDtoAdapter(params.body),
  };
}
