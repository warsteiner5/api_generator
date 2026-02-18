/* tslint:disable */
/* eslint-disable */
import { ApiLoginVerifyResultAltDto } from '../models/api-login-verify-result';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfLoginVerifyResult = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiLoginVerifyResultAltDto | null;
};
