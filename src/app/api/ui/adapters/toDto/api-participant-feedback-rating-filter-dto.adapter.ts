import { ParticipantFeedbackRatingFilter } from '../../models/participant-feedback-rating-filter.interface';
import { ApiParticipantFeedbackRatingFilterDto } from '../../../swagger/models/api-participant-feedback-rating-filter-dto';

export function adaptApiParticipantFeedbackRatingFilterDto(source?: ParticipantFeedbackRatingFilter | null): ApiParticipantFeedbackRatingFilterDto {
  return (source ?? {}) as ApiParticipantFeedbackRatingFilterDto;
}
