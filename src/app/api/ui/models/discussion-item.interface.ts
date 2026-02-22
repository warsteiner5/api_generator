import { DiscussionItemTypeEnum } from '../enums/discussion-item-type.enum';
import { UserFullNameAlt } from './user-full-name-alt.interface';

// @ts-ignore
export interface DiscussionItem {
  dateTime: string;
  discussionId: number;
  discussionItemType: DiscussionItemTypeEnum;
  entityId: number;
  id: number;
  isLastItem: boolean;
  isMyMessage: boolean;
  isRead: boolean;
  organizationGuid: string;
  organizationName: string;
  userName: UserFullNameAlt;
}
