import { CanLeaveFeebackRequest } from '../../models/can-leave-feeback-request.interface';
import { ParticipantRatingCanLeaveRatingFeedback$Params } from '../../../swagger/fn/participant-rating/participant-rating-can-leave-rating-feedback';
import { adaptApiCanLeaveFeebackRequestDto } from '../../adapters/toDto/api-can-leave-feeback-request-dto.adapter';

export interface ParticipantRatingCanLeaveRatingFeedbackParams {
  body?: CanLeaveFeebackRequest;
}

export const participantRatingCanLeaveRatingFeedbackParamsAdapter = {
  adapt(params?: ParticipantRatingCanLeaveRatingFeedbackParams): ParticipantRatingCanLeaveRatingFeedback$Params {
    if (!params) {
      return {} as ParticipantRatingCanLeaveRatingFeedback$Params;
    }
    return {
      body: adaptApiCanLeaveFeebackRequestDto(params.body),
    };
  }
};
