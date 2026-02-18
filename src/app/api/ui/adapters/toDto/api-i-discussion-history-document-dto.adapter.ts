import { IDiscussionHistoryDocument } from '../../models/i-discussion-history-document.interface';
import { ApiIDiscussionHistoryDocumentDto } from '../../../swagger/models/api-i-discussion-history-document-dto';

export function adaptApiIDiscussionHistoryDocumentDto(source?: IDiscussionHistoryDocument | null): ApiIDiscussionHistoryDocumentDto {
  return {
    FileGuid: source?.fileGuid,
    Name: source?.name,
    Size: source?.size,
    Type: source?.type,
  };
}
