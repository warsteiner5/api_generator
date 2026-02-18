import { OrganizationRating } from '../../models/organization-rating.interface';
import { ParticipantRatingShowCustomerFeedbackForParticipant$Params } from '../../../swagger/fn/participant-rating/participant-rating-show-customer-feedback-for-participant';
import { adaptApiOrganizationRatingDto } from '../../adapters/toDto/api-organization-rating-dto.adapter';

export interface ParticipantRatingShowCustomerFeedbackForParticipantParams {
  body?: OrganizationRating;
}

export const participantRatingShowCustomerFeedbackForParticipantParamsAdapter = {
  adapt(params?: ParticipantRatingShowCustomerFeedbackForParticipantParams): ParticipantRatingShowCustomerFeedbackForParticipant$Params {
    if (!params) {
      return {} as ParticipantRatingShowCustomerFeedbackForParticipant$Params;
    }
    return {
      body: adaptApiOrganizationRatingDto(params.body),
    };
  }
};
