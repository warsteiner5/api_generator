/* tslint:disable */
/* eslint-disable */
import { ApiIDiscussionHistoryDto } from '../models/api-i-discussion-history-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfIDiscussionHistoryDtoOf = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiIDiscussionHistoryDto> | null;
};
