/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
import { ApiOrganizationTypeEnum } from '../models/api-organization-type-enum';
export type ApiParticipantFeedbackRatingFilterDto = ApiBaseFilterObjectAltDto & {
'Type'?: ApiOrganizationTypeEnum | null;
'ParticipantNameOrInn'?: string | null;
'ShowOnlyWithRating'?: boolean;
'ShowOnlyWithRatingFromThisMarket'?: boolean;
};
