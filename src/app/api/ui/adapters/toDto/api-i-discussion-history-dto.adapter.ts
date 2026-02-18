import { IDiscussionHistory } from '../../models/i-discussion-history.interface';
import { ApiIDiscussionHistoryDto } from '../../../swagger/models/api-i-discussion-history-dto';
import { adaptApiDiscussionItemTypeEnum } from './api-discussion-item-type-enum.adapter';
import { adaptApiIDiscussionHistoryDocumentDto } from './api-i-discussion-history-document-dto.adapter';

export function adaptApiIDiscussionHistoryDto(source?: IDiscussionHistory | null): ApiIDiscussionHistoryDto {
  return {
    DateTime: source?.dateTime,
    DiscussionItemType: adaptApiDiscussionItemTypeEnum(source?.discussionItemType),
    Documents: (source?.documents ?? []).map((item) => adaptApiIDiscussionHistoryDocumentDto(item)),
    IsMyMessage: source?.isMyMessage,
    OldPrice: source?.oldPrice,
    OrganizationName: source?.organizationName,
    Price: source?.price,
    SystemMessage: source?.systemMessage,
  };
}
