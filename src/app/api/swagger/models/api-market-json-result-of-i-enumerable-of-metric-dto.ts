/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMetricDto } from '../models/api-metric-dto';
export type ApiMarketJsonResultOfIEnumerableOfMetricDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiMetricDto> | null;
};
