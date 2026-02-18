/* tslint:disable */
/* eslint-disable */
import { ApiDiscussionItemTypeEnum } from '../models/api-discussion-item-type-enum';
import { ApiUserFullNameAltDto } from '../models/api-user-full-name';
export interface ApiDiscussionItemDto {
  DateTime?: string;
  DiscussionId?: number;
  DiscussionItemType?: ApiDiscussionItemTypeEnum;
  EntityId?: number | null;
  Id?: number;
  IsLastItem?: boolean;
  IsMyMessage?: boolean;
  IsRead?: boolean;
  OrganizationGuid?: string;
  OrganizationName?: string | null;
  UserName?: ApiUserFullNameAltDto | null;
}
