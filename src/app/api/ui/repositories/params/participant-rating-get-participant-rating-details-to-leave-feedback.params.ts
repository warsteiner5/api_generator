import { ParticipantRatingGetParticipantRatingDetailsToLeaveFeedback$Params } from '../../../swagger/fn/participant-rating/participant-rating-get-participant-rating-details-to-leave-feedback';

export interface ParticipantRatingGetParticipantRatingDetailsToLeaveFeedbackParams {
  id: number;
}

export const participantRatingGetParticipantRatingDetailsToLeaveFeedbackParamsAdapter = {
  adapt(params?: ParticipantRatingGetParticipantRatingDetailsToLeaveFeedbackParams): ParticipantRatingGetParticipantRatingDetailsToLeaveFeedback$Params {
    if (!params) {
      return {} as ParticipantRatingGetParticipantRatingDetailsToLeaveFeedback$Params;
    }
    return {
      id: params.id,
    };
  }
};
