/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOkeiShortDto } from '../models/api-okei-short-dto';
export type ApiMarketJsonResultOfListOfOkeiShortDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiOkeiShortDto> | null;
};
