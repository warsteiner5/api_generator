/* tslint:disable */
/* eslint-disable */
import { ApiFileInfoForSignDto } from '../models/api-file-info-for-sign-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfFileInfoForSignDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiFileInfoForSignDto | null;
};
