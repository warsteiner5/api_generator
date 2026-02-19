/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiSignInResultAltDto } from '../models/api-sign-in-result';
export type ApiMarketJsonResultOfSignInResultAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiSignInResultAltDto | null;
};
