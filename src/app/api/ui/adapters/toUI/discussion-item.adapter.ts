import { ApiDiscussionItemDto } from '../../../swagger/models/api-discussion-item-dto';
import { DiscussionItem } from '../../models/discussion-item.interface';
import { adaptDiscussionItemTypeEnumToUI } from './discussion-item-type-enum.adapter';
import { adaptUserFullNameAltToUI } from './user-full-name-alt.adapter';

export function adaptDiscussionItemToUI(source?: ApiDiscussionItemDto | null): DiscussionItem {
  return {
    dateTime: source?.DateTime ?? '',
    discussionId: source?.DiscussionId ?? 0,
    discussionItemType: adaptDiscussionItemTypeEnumToUI(source?.DiscussionItemType),
    entityId: source?.EntityId ?? 0,
    id: source?.Id ?? 0,
    isLastItem: source?.IsLastItem ?? false,
    isMyMessage: source?.IsMyMessage ?? false,
    isRead: source?.IsRead ?? false,
    organizationGuid: source?.OrganizationGuid ?? '',
    organizationName: source?.OrganizationName ?? '',
    userName: adaptUserFullNameAltToUI(source?.UserName),
  };
}
