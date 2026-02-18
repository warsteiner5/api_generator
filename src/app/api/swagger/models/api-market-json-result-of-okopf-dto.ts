/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOkopfDto } from '../models/api-okopf-dto';
export type ApiMarketJsonResultOfOkopfDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiOkopfDto | null;
};
