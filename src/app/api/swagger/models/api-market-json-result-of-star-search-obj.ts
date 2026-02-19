/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiStarSearchObjAltDto } from '../models/api-star-search-obj';
export type ApiMarketJsonResultOfStarSearchObjAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiStarSearchObjAltDto | null;
};
