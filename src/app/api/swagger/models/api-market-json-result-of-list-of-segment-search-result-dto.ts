/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiSegmentSearchResultDto } from '../models/api-segment-search-result-dto';
export type ApiMarketJsonResultOfListOfSegmentSearchResultDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiSegmentSearchResultDto> | null;
};
