import { DiscussionItem } from '../../models/discussion-item.interface';
import { ApiDiscussionItemDto } from '../../../swagger/models/api-discussion-item-dto';
import { apiDiscussionItemTypeEnumAdapter } from '../enums/api-discussion-item-type-enum.adapter';
import { apiUserFullNameAltDtoAdapter } from './api-user-full-name.adapter';

export const apiDiscussionItemDtoAdapter = (source?: DiscussionItem | null): ApiDiscussionItemDto => {
  return {
    DateTime: source?.dateTime,
    DiscussionId: source?.discussionId,
    DiscussionItemType: source?.discussionItemType === null ? undefined : apiDiscussionItemTypeEnumAdapter(source?.discussionItemType),
    EntityId: source?.entityId,
    Id: source?.id,
    IsLastItem: source?.isLastItem,
    IsMyMessage: source?.isMyMessage,
    IsRead: source?.isRead,
    OrganizationGuid: source?.organizationGuid,
    OrganizationName: source?.organizationName,
    UserName: source?.userName === null ? undefined : apiUserFullNameAltDtoAdapter(source?.userName),
  };
}
