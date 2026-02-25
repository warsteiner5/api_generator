import { ParticipantFeedbackRatingFilter } from '../../models/participant-feedback-rating-filter.interface';
import { ApiParticipantFeedbackRatingFilterDto } from '../../../swagger/models/api-participant-feedback-rating-filter-dto';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';
import { apiOrganizationTypeEnumAdapter } from '../enums/api-organization-type-enum.adapter';

export const apiParticipantFeedbackRatingFilterDtoAdapter = (source?: ParticipantFeedbackRatingFilter | null): ApiParticipantFeedbackRatingFilterDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    Type: source?.type === null ? undefined : apiOrganizationTypeEnumAdapter(source?.type),
    ParticipantNameOrInn: source?.participantNameOrInn,
    ShowOnlyWithRating: source?.showOnlyWithRating,
    ShowOnlyWithRatingFromThisMarket: source?.showOnlyWithRatingFromThisMarket,
  };
}
