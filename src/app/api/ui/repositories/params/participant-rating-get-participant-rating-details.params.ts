import { ParticipantRatingGetParticipantRatingDetails$Params } from '../../../swagger/fn/participant-rating/participant-rating-get-participant-rating-details';

// @ts-ignore
export interface ParticipantRatingGetParticipantRatingDetailsParams {
  id: number;
}

export function participantRatingGetParticipantRatingDetailsAdapter(params?: ParticipantRatingGetParticipantRatingDetailsParams): ParticipantRatingGetParticipantRatingDetails$Params {
  if (!params) {
    return {} as ParticipantRatingGetParticipantRatingDetails$Params;
  }
  return {
      id: params.id,
  };
}
