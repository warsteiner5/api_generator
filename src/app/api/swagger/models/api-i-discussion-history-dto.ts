/* tslint:disable */
/* eslint-disable */
import { ApiDiscussionItemTypeEnum } from '../models/api-discussion-item-type-enum';
import { ApiIDiscussionHistoryDocumentDto } from '../models/api-i-discussion-history-document-dto';
export interface ApiIDiscussionHistoryDto {
  DateTime?: string;
  DiscussionItemType?: ApiDiscussionItemTypeEnum;
  Documents?: Array<ApiIDiscussionHistoryDocumentDto> | null;
  IsMyMessage?: boolean;
  OldPrice?: number | null;
  OrganizationName?: string | null;
  Price?: number | null;
  SystemMessage?: string | null;
}
