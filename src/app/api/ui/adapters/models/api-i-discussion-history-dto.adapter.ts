import { IDiscussionHistory } from '../../models/i-discussion-history.interface';
import { ApiIDiscussionHistoryDto } from '../../../swagger/models/api-i-discussion-history-dto';
import { apiDiscussionItemTypeEnumAdapter } from '../enums/api-discussion-item-type-enum.adapter';
import { apiIDiscussionHistoryDocumentDtoAdapter } from './api-i-discussion-history-document-dto.adapter';

export const apiIDiscussionHistoryDtoAdapter = (source?: IDiscussionHistory | null): ApiIDiscussionHistoryDto => {
  return {
    DateTime: source?.dateTime,
    DiscussionItemType: source?.discussionItemType === null ? undefined : apiDiscussionItemTypeEnumAdapter(source?.discussionItemType),
    Documents: source?.documents?.map((item) => apiIDiscussionHistoryDocumentDtoAdapter(item)),
    IsMyMessage: source?.isMyMessage,
    OldPrice: source?.oldPrice,
    OrganizationName: source?.organizationName,
    Price: source?.price,
    SystemMessage: source?.systemMessage,
  };
}
