/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiSegmentInfoDto } from '../models/api-segment-info-dto';
export type ApiMarketJsonResultOfSegmentInfoDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiSegmentInfoDto | null;
};
