/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiStarSuggestObjectAltDto } from '../models/api-star-suggest-object';
export type ApiMarketJsonResultOfStarSuggestObjectOfAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiStarSuggestObjectAltDto> | null;
};
