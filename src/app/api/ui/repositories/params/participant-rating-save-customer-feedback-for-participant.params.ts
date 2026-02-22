import { CustomerFeedbackToParticipant } from '../../models/customer-feedback-to-participant.interface';
import { ParticipantRatingSaveCustomerFeedbackForParticipant$Params } from '../../../swagger/fn/participant-rating/participant-rating-save-customer-feedback-for-participant';
import { apiCustomerFeedbackToParticipantDtoAdapter } from '../../adapters/models/api-customer-feedback-to-participant-dto.adapter';

// @ts-ignore
export interface ParticipantRatingSaveCustomerFeedbackForParticipantParams {
  body?: CustomerFeedbackToParticipant;
}

export function participantRatingSaveCustomerFeedbackForParticipantAdapter(params?: ParticipantRatingSaveCustomerFeedbackForParticipantParams): ParticipantRatingSaveCustomerFeedbackForParticipant$Params {
  if (!params) {
    return {} as ParticipantRatingSaveCustomerFeedbackForParticipant$Params;
  }
  return {
      body: apiCustomerFeedbackToParticipantDtoAdapter(params.body),
  };
}
