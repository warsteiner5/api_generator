import { ApiIDiscussionHistoryDto } from '../../../swagger/models/api-i-discussion-history-dto';
import { IDiscussionHistory } from '../../models/i-discussion-history.interface';
import { adaptDiscussionItemTypeEnumToUI } from './discussion-item-type-enum.adapter';
import { adaptIDiscussionHistoryDocumentToUI } from './i-discussion-history-document.adapter';

export function adaptIDiscussionHistoryToUI(source?: ApiIDiscussionHistoryDto | null): IDiscussionHistory {
  return {
    dateTime: source?.DateTime ?? '',
    discussionItemType: adaptDiscussionItemTypeEnumToUI(source?.DiscussionItemType),
    documents: (source?.Documents ?? []).map((item) => adaptIDiscussionHistoryDocumentToUI(item)),
    isMyMessage: source?.IsMyMessage ?? false,
    oldPrice: source?.OldPrice ?? 0,
    organizationName: source?.OrganizationName ?? '',
    price: source?.Price ?? 0,
    systemMessage: source?.SystemMessage ?? '',
  };
}
