import { CustomerFeedbackToParticipant } from '../../models/customer-feedback-to-participant.interface';
import { ParticipantRatingSaveCustomerFeedbackForParticipant$Params } from '../../../swagger/fn/participant-rating/participant-rating-save-customer-feedback-for-participant';
import { adaptApiCustomerFeedbackToParticipantDto } from '../../adapters/toDto/api-customer-feedback-to-participant-dto.adapter';

export interface ParticipantRatingSaveCustomerFeedbackForParticipantParams {
  body?: CustomerFeedbackToParticipant;
}

export const participantRatingSaveCustomerFeedbackForParticipantParamsAdapter = {
  adapt(params?: ParticipantRatingSaveCustomerFeedbackForParticipantParams): ParticipantRatingSaveCustomerFeedbackForParticipant$Params {
    if (!params) {
      return {} as ParticipantRatingSaveCustomerFeedbackForParticipant$Params;
    }
    return {
      body: adaptApiCustomerFeedbackToParticipantDto(params.body),
    };
  }
};
