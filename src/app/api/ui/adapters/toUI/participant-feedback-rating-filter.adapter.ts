import { ApiParticipantFeedbackRatingFilterDto } from '../../../swagger/models/api-participant-feedback-rating-filter-dto';
import { ParticipantFeedbackRatingFilter } from '../../models/participant-feedback-rating-filter.interface';

export function adaptParticipantFeedbackRatingFilterToUI(source?: ApiParticipantFeedbackRatingFilterDto | null): ParticipantFeedbackRatingFilter {
  return (source ?? {}) as ParticipantFeedbackRatingFilter;
}
