import { ParticipantRatingGetParticipantRatingDetailsToLeaveFeedback$Params } from '../../../swagger/fn/participant-rating/participant-rating-get-participant-rating-details-to-leave-feedback';

// @ts-ignore
export interface ParticipantRatingGetParticipantRatingDetailsToLeaveFeedbackParams {
  id: number;
}

export function participantRatingGetParticipantRatingDetailsToLeaveFeedbackAdapter(params?: ParticipantRatingGetParticipantRatingDetailsToLeaveFeedbackParams): ParticipantRatingGetParticipantRatingDetailsToLeaveFeedback$Params {
  if (!params) {
    return {} as ParticipantRatingGetParticipantRatingDetailsToLeaveFeedback$Params;
  }
  return {
      id: params.id,
  };
}
