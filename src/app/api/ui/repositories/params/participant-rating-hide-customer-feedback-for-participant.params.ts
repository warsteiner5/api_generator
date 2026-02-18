import { OrganizationRating } from '../../models/organization-rating.interface';
import { ParticipantRatingHideCustomerFeedbackForParticipant$Params } from '../../../swagger/fn/participant-rating/participant-rating-hide-customer-feedback-for-participant';
import { adaptApiOrganizationRatingDto } from '../../adapters/toDto/api-organization-rating-dto.adapter';

export interface ParticipantRatingHideCustomerFeedbackForParticipantParams {
  body?: OrganizationRating;
}

export const participantRatingHideCustomerFeedbackForParticipantParamsAdapter = {
  adapt(params?: ParticipantRatingHideCustomerFeedbackForParticipantParams): ParticipantRatingHideCustomerFeedbackForParticipant$Params {
    if (!params) {
      return {} as ParticipantRatingHideCustomerFeedbackForParticipant$Params;
    }
    return {
      body: adaptApiOrganizationRatingDto(params.body),
    };
  }
};
