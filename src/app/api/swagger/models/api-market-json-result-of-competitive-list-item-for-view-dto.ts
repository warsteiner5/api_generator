/* tslint:disable */
/* eslint-disable */
import { ApiCompetitiveListItemForViewDto } from '../models/api-competitive-list-item-for-view-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfCompetitiveListItemForViewDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiCompetitiveListItemForViewDto | null;
};
