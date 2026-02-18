/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiStarSearchObjAltDto } from '../models/api-star-search-obj';
export type ApiMarketJsonResultOfStarSearchObj = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiStarSearchObjAltDto | null;
};
