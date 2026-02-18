import { DiscussionItemTypeEnum } from '../enums/discussion-item-type.enum';
import { IDiscussionHistoryDocument } from './i-discussion-history-document.interface';

export interface IDiscussionHistory {
  dateTime: string;
  discussionItemType: DiscussionItemTypeEnum;
  documents: IDiscussionHistoryDocument[];
  isMyMessage: boolean;
  oldPrice: number;
  organizationName: string;
  price: number;
  systemMessage: string;
}
