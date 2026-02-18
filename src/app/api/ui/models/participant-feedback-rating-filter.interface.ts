import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { OrganizationTypeEnum } from '../enums/organization-type.enum';

export type ParticipantFeedbackRatingFilter = BaseFilterObjectAlt & { 'Type'?: OrganizationTypeEnum | null; 'ParticipantNameOrInn'?: string | null; 'ShowOnlyWithRating'?: boolean; 'ShowOnlyWithRatingFromThisMarket'?: boolean; };
