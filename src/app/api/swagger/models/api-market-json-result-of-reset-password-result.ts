/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiResetPasswordResultAltDto } from '../models/api-reset-password-result';
export type ApiMarketJsonResultOfResetPasswordResult = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiResetPasswordResultAltDto | null;
};
