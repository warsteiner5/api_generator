/* tslint:disable */
/* eslint-disable */
import { ApiDiscussionItemDto } from '../models/api-discussion-item-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfDiscussionItemDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiDiscussionItemDto | null;
};
