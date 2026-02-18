/* tslint:disable */
/* eslint-disable */
import { ApiDiscussionTitleDto } from '../models/api-discussion-title-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfListOfDiscussionTitleDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiDiscussionTitleDto> | null;
};
