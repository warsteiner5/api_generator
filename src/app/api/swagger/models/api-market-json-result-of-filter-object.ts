/* tslint:disable */
/* eslint-disable */
import { ApiFilterObjectAltDto } from '../models/api-filter-object';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfFilterObjectAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiFilterObjectAltDto | null;
};
