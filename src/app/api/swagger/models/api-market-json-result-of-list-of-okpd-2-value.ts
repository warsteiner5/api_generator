/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOkpd2ValueAltDto } from '../models/api-okpd-2-value';
export type ApiMarketJsonResultOfListOfOkpd2ValueAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiOkpd2ValueAltDto> | null;
};
