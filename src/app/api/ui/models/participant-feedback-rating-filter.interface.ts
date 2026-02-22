import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { OrganizationTypeEnum } from '../enums/organization-type.enum';

// @ts-ignore
export interface ParticipantFeedbackRatingFilter extends BaseFilterObjectAlt {
  type: OrganizationTypeEnum;
  participantNameOrInn: string;
  showOnlyWithRating: boolean;
  showOnlyWithRatingFromThisMarket: boolean;
}
