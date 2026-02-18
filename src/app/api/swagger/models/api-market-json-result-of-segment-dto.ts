/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiSegmentDto } from '../models/api-segment-dto';
export type ApiMarketJsonResultOfSegmentDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiSegmentDto | null;
};
