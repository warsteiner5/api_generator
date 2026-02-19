/* tslint:disable */
/* eslint-disable */
import { ApiExternalUserInfoAltDto } from '../models/api-external-user-info';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfExternalUserInfoAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiExternalUserInfoAltDto | null;
};
