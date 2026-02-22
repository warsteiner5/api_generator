import { OrganizationRating } from '../../models/organization-rating.interface';
import { ParticipantRatingDeleteCustomerFeedbackForParticipant$Params } from '../../../swagger/fn/participant-rating/participant-rating-delete-customer-feedback-for-participant';
import { apiOrganizationRatingDtoAdapter } from '../../adapters/models/api-organization-rating-dto.adapter';

// @ts-ignore
export interface ParticipantRatingDeleteCustomerFeedbackForParticipantParams {
  body?: OrganizationRating;
}

export function participantRatingDeleteCustomerFeedbackForParticipantAdapter(params?: ParticipantRatingDeleteCustomerFeedbackForParticipantParams): ParticipantRatingDeleteCustomerFeedbackForParticipant$Params {
  if (!params) {
    return {} as ParticipantRatingDeleteCustomerFeedbackForParticipant$Params;
  }
  return {
      body: apiOrganizationRatingDtoAdapter(params.body),
  };
}
