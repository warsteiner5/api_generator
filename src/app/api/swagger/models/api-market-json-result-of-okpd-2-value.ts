/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOkpd2ValueAltDto } from '../models/api-okpd-2-value';
export type ApiMarketJsonResultOfOkpd2Value = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiOkpd2ValueAltDto | null;
};
