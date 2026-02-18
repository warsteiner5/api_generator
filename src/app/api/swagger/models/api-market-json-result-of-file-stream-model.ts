/* tslint:disable */
/* eslint-disable */
import { ApiFileStreamModelAltDto } from '../models/api-file-stream-model';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfFileStreamModel = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiFileStreamModelAltDto | null;
};
