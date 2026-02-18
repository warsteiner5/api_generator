import { ApiParticipantRatingDetailsToLeaveFeedbackDto } from '../../../swagger/models/api-participant-rating-details-to-leave-feedback-dto';
import { ParticipantRatingDetailsToLeaveFeedback } from '../../models/participant-rating-details-to-leave-feedback.interface';
import { adaptRatingQuestionToUI } from './rating-question.adapter';

export function adaptParticipantRatingDetailsToLeaveFeedbackToUI(source?: ApiParticipantRatingDetailsToLeaveFeedbackDto | null): ParticipantRatingDetailsToLeaveFeedback {
  return {
    participantAddress: source?.ParticipantAddress ?? '',
    participantInn: source?.ParticipantInn ?? '',
    participantName: source?.ParticipantName ?? '',
    questions: (source?.Questions ?? []).map((item) => adaptRatingQuestionToUI(item)),
  };
}
