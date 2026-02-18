/* tslint:disable */
/* eslint-disable */
import { ApiDiscussionDto } from '../models/api-discussion-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfListOfDiscussionDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiDiscussionDto> | null;
};
