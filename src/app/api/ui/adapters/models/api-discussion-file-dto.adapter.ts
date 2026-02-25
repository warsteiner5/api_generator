import { DiscussionFile } from '../../models/discussion-file.interface';
import { ApiDiscussionFileDto } from '../../../swagger/models/api-discussion-file-dto';
import { apiDocumentDtoAdapter } from './api-document-dto.adapter';
import { apiUserFullNameAltDtoAdapter } from './api-user-full-name.adapter';

export const apiDiscussionFileDtoAdapter = (source?: DiscussionFile | null): ApiDiscussionFileDto => {
  return {
    ...apiDocumentDtoAdapter(source as unknown as Parameters<typeof apiDocumentDtoAdapter>[0]),
    Name: source?.name,
    UserId: source?.userId,
    UserName: source?.userName === null ? undefined : apiUserFullNameAltDtoAdapter(source?.userName),
    Size: source?.size,
    FileGuid: source?.fileGuid,
    DiscussionId: source?.discussionId,
  };
}
