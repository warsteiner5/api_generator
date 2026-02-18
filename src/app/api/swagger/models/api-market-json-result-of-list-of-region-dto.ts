/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiRegionDto } from '../models/api-region-dto';
export type ApiMarketJsonResultOfListOfRegionDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiRegionDto> | null;
};
