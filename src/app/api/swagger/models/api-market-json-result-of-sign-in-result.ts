/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiSignInResultAltDto } from '../models/api-sign-in-result';
export type ApiMarketJsonResultOfSignInResult = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiSignInResultAltDto | null;
};
