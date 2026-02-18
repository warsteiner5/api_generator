/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiTagItemAltDto } from '../models/api-tag-item';
export type ApiMarketJsonResultOfTagItem = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiTagItemAltDto | null;
};
