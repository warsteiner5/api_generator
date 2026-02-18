/* tslint:disable */
/* eslint-disable */
import { ApiCompetitiveListItemDto } from '../models/api-competitive-list-item-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfListOfCompetitiveListItemDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiCompetitiveListItemDto> | null;
};
