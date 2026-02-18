/* tslint:disable */
/* eslint-disable */
import { ApiAccountDto } from '../models/api-account-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfListOfAccountDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiAccountDto> | null;
};
