/* tslint:disable */
/* eslint-disable */
import { ApiForgotPasswordResultAltDto } from '../models/api-forgot-password-result';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfForgotPasswordResultAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiForgotPasswordResultAltDto | null;
};
