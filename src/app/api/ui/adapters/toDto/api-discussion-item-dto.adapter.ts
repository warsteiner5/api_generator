import { DiscussionItem } from '../../models/discussion-item.interface';
import { ApiDiscussionItemDto } from '../../../swagger/models/api-discussion-item-dto';
import { adaptApiDiscussionItemTypeEnum } from './api-discussion-item-type-enum.adapter';
import { adaptApiUserFullNameAltDto } from './api-user-full-name.adapter';

export function adaptApiDiscussionItemDto(source?: DiscussionItem | null): ApiDiscussionItemDto {
  return {
    DateTime: source?.dateTime,
    DiscussionId: source?.discussionId,
    DiscussionItemType: adaptApiDiscussionItemTypeEnum(source?.discussionItemType),
    EntityId: source?.entityId,
    Id: source?.id,
    IsLastItem: source?.isLastItem,
    IsMyMessage: source?.isMyMessage,
    IsRead: source?.isRead,
    OrganizationGuid: source?.organizationGuid,
    OrganizationName: source?.organizationName,
    UserName: adaptApiUserFullNameAltDto(source?.userName),
  };
}
