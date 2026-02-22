import { ApiDiscussionItemDto } from '../../../swagger/models/api-discussion-item-dto';
import { DiscussionItem } from '../../models/discussion-item.interface';
import { discussionItemTypeEnumAdapter } from '../enums/discussion-item-type-enum.adapter';
import { userFullNameAltAdapter } from './user-full-name-alt.adapter';

export const discussionItemAdapter = (source?: ApiDiscussionItemDto | null): DiscussionItem => {
  return {
    dateTime: source?.DateTime,
    discussionId: source?.DiscussionId,
    discussionItemType: source?.DiscussionItemType === null ? undefined : discussionItemTypeEnumAdapter(source?.DiscussionItemType),
    entityId: source?.EntityId,
    id: source?.Id,
    isLastItem: source?.IsLastItem,
    isMyMessage: source?.IsMyMessage,
    isRead: source?.IsRead,
    organizationGuid: source?.OrganizationGuid,
    organizationName: source?.OrganizationName,
    userName: source?.UserName === null ? undefined : userFullNameAltAdapter(source?.UserName),
  };
}
