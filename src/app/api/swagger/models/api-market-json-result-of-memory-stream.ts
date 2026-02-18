/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMemoryStreamAltDto } from '../models/api-memory-stream';
export type ApiMarketJsonResultOfMemoryStream = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiMemoryStreamAltDto | null;
};
