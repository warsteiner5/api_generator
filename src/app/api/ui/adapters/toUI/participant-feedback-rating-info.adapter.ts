import { ApiParticipantFeedbackRatingInfoDto } from '../../../swagger/models/api-participant-feedback-rating-info-dto';
import { ParticipantFeedbackRatingInfo } from '../../models/participant-feedback-rating-info.interface';

export function adaptParticipantFeedbackRatingInfoToUI(source?: ApiParticipantFeedbackRatingInfoDto | null): ParticipantFeedbackRatingInfo {
  return {
    canRate: source?.CanRate ?? false,
    feedbacksCount: source?.FeedbacksCount ?? 0,
    id: source?.Id ?? 0,
    organizationId: source?.OrganizationId ?? 0,
    participantInn: source?.ParticipantInn ?? '',
    participantName: source?.ParticipantName ?? '',
    rating: source?.Rating ?? 0,
    typeName: source?.TypeName ?? '',
  };
}
