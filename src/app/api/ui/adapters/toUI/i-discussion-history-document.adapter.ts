import { ApiIDiscussionHistoryDocumentDto } from '../../../swagger/models/api-i-discussion-history-document-dto';
import { IDiscussionHistoryDocument } from '../../models/i-discussion-history-document.interface';

export function adaptIDiscussionHistoryDocumentToUI(source?: ApiIDiscussionHistoryDocumentDto | null): IDiscussionHistoryDocument {
  return {
    fileGuid: source?.FileGuid ?? '',
    name: source?.Name ?? '',
    size: source?.Size ?? 0,
    type: source?.Type ?? '',
  };
}
