/* tslint:disable */
/* eslint-disable */
import { ApiIdNameAltDto } from '../models/api-id-name';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfListOfIdNameAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiIdNameAltDto> | null;
};
