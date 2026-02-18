/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterAltDto } from '../models/api-base-filter';
import { ApiCompetitiveListItemStateEnum } from '../models/api-competitive-list-item-state-enum';
export type ApiOffersTableFilterAltDto = ApiBaseFilterAltDto & {
'RequirementRequestId'?: number;
'State'?: ApiCompetitiveListItemStateEnum | null;
'CompetitiveListItems'?: Array<number> | null;
};
