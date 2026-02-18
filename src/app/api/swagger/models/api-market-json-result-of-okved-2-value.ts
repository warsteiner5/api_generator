/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOkved2ValueAltDto } from '../models/api-okved-2-value';
export type ApiMarketJsonResultOfOkved2Value = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiOkved2ValueAltDto | null;
};
