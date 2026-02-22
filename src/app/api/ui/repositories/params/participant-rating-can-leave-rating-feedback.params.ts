import { CanLeaveFeebackRequest } from '../../models/can-leave-feeback-request.interface';
import { ParticipantRatingCanLeaveRatingFeedback$Params } from '../../../swagger/fn/participant-rating/participant-rating-can-leave-rating-feedback';
import { apiCanLeaveFeebackRequestDtoAdapter } from '../../adapters/models/api-can-leave-feeback-request-dto.adapter';

// @ts-ignore
export interface ParticipantRatingCanLeaveRatingFeedbackParams {
  body?: CanLeaveFeebackRequest;
}

export function participantRatingCanLeaveRatingFeedbackAdapter(params?: ParticipantRatingCanLeaveRatingFeedbackParams): ParticipantRatingCanLeaveRatingFeedback$Params {
  if (!params) {
    return {} as ParticipantRatingCanLeaveRatingFeedback$Params;
  }
  return {
      body: apiCanLeaveFeebackRequestDtoAdapter(params.body),
  };
}
