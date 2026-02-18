import { ParticipantFeedbackRatingFilter } from '../../models/participant-feedback-rating-filter.interface';
import { ParticipantRatingGetParticipantsRating$Params } from '../../../swagger/fn/participant-rating/participant-rating-get-participants-rating';
import { adaptApiParticipantFeedbackRatingFilterDto } from '../../adapters/toDto/api-participant-feedback-rating-filter-dto.adapter';

export interface ParticipantRatingGetParticipantsRatingParams {
  body?: ParticipantFeedbackRatingFilter;
}

export const participantRatingGetParticipantsRatingParamsAdapter = {
  adapt(params?: ParticipantRatingGetParticipantsRatingParams): ParticipantRatingGetParticipantsRating$Params {
    if (!params) {
      return {} as ParticipantRatingGetParticipantsRating$Params;
    }
    return {
      body: adaptApiParticipantFeedbackRatingFilterDto(params.body),
    };
  }
};
