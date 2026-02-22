import { ParticipantFeedbackRatingFilter } from '../../models/participant-feedback-rating-filter.interface';
import { ParticipantRatingGetParticipantsRating$Params } from '../../../swagger/fn/participant-rating/participant-rating-get-participants-rating';
import { apiParticipantFeedbackRatingFilterDtoAdapter } from '../../adapters/models/api-participant-feedback-rating-filter-dto.adapter';

// @ts-ignore
export interface ParticipantRatingGetParticipantsRatingParams {
  body?: ParticipantFeedbackRatingFilter;
}

export function participantRatingGetParticipantsRatingAdapter(params?: ParticipantRatingGetParticipantsRatingParams): ParticipantRatingGetParticipantsRating$Params {
  if (!params) {
    return {} as ParticipantRatingGetParticipantsRating$Params;
  }
  return {
      body: apiParticipantFeedbackRatingFilterDtoAdapter(params.body),
  };
}
