import { ApiIDiscussionHistoryDto } from '../../../swagger/models/api-i-discussion-history-dto';
import { IDiscussionHistory } from '../../models/i-discussion-history.interface';
import { discussionItemTypeEnumAdapter } from '../enums/discussion-item-type-enum.adapter';
import { iDiscussionHistoryDocumentAdapter } from './i-discussion-history-document.adapter';

export const iDiscussionHistoryAdapter = (source?: ApiIDiscussionHistoryDto | null): IDiscussionHistory => {
  return {
    dateTime: source?.DateTime,
    discussionItemType: source?.DiscussionItemType === null ? undefined : discussionItemTypeEnumAdapter(source?.DiscussionItemType),
    documents: source?.Documents?.map((item) => iDiscussionHistoryDocumentAdapter(item)),
    isMyMessage: source?.IsMyMessage,
    oldPrice: source?.OldPrice,
    organizationName: source?.OrganizationName,
    price: source?.Price,
    systemMessage: source?.SystemMessage,
  };
}
