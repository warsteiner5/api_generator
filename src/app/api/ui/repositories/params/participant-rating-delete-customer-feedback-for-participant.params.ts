import { OrganizationRating } from '../../models/organization-rating.interface';
import { ParticipantRatingDeleteCustomerFeedbackForParticipant$Params } from '../../../swagger/fn/participant-rating/participant-rating-delete-customer-feedback-for-participant';
import { adaptApiOrganizationRatingDto } from '../../adapters/toDto/api-organization-rating-dto.adapter';

export interface ParticipantRatingDeleteCustomerFeedbackForParticipantParams {
  body?: OrganizationRating;
}

export const participantRatingDeleteCustomerFeedbackForParticipantParamsAdapter = {
  adapt(params?: ParticipantRatingDeleteCustomerFeedbackForParticipantParams): ParticipantRatingDeleteCustomerFeedbackForParticipant$Params {
    if (!params) {
      return {} as ParticipantRatingDeleteCustomerFeedbackForParticipant$Params;
    }
    return {
      body: adaptApiOrganizationRatingDto(params.body),
    };
  }
};
