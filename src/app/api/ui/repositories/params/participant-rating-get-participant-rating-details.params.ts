import { ParticipantRatingGetParticipantRatingDetails$Params } from '../../../swagger/fn/participant-rating/participant-rating-get-participant-rating-details';

export interface ParticipantRatingGetParticipantRatingDetailsParams {
  id: number;
}

export const participantRatingGetParticipantRatingDetailsParamsAdapter = {
  adapt(params?: ParticipantRatingGetParticipantRatingDetailsParams): ParticipantRatingGetParticipantRatingDetails$Params {
    if (!params) {
      return {} as ParticipantRatingGetParticipantRatingDetails$Params;
    }
    return {
      id: params.id,
    };
  }
};
