import { ApiDiscussionFileDto } from '../../../swagger/models/api-discussion-file-dto';
import { DiscussionFile } from '../../models/discussion-file.interface';
import { documentAdapter } from './document.adapter';
import { userFullNameAltAdapter } from './user-full-name-alt.adapter';

export const discussionFileAdapter = (source?: ApiDiscussionFileDto | null): DiscussionFile => {
  return {
    ...documentAdapter(source as unknown as Parameters<typeof documentAdapter>[0]),
    name: source?.Name,
    userId: source?.UserId,
    userName: source?.UserName === null ? undefined : userFullNameAltAdapter(source?.UserName),
    size: source?.Size,
    fileGuid: source?.FileGuid,
    discussionId: source?.DiscussionId,
  };
}
