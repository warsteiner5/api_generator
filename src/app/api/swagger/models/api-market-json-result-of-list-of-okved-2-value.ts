/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOkved2ValueAltDto } from '../models/api-okved-2-value';
export type ApiMarketJsonResultOfListOfOkved2ValueAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiOkved2ValueAltDto> | null;
};
