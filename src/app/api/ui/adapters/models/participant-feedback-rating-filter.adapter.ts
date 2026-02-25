import { ApiParticipantFeedbackRatingFilterDto } from '../../../swagger/models/api-participant-feedback-rating-filter-dto';
import { ParticipantFeedbackRatingFilter } from '../../models/participant-feedback-rating-filter.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';
import { organizationTypeEnumAdapter } from '../enums/organization-type-enum.adapter';

export const participantFeedbackRatingFilterAdapter = (source?: ApiParticipantFeedbackRatingFilterDto | null): ParticipantFeedbackRatingFilter => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    type: source?.Type === null ? undefined : organizationTypeEnumAdapter(source?.Type),
    participantNameOrInn: source?.ParticipantNameOrInn,
    showOnlyWithRating: source?.ShowOnlyWithRating,
    showOnlyWithRatingFromThisMarket: source?.ShowOnlyWithRatingFromThisMarket,
  };
}
