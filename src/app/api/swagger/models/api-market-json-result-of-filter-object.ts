/* tslint:disable */
/* eslint-disable */
import { ApiFilterObjectAltDto } from '../models/api-filter-object';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfFilterObject = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiFilterObjectAltDto | null;
};
