import { ApiDiscussionFileDto } from '../../../swagger/models/api-discussion-file-dto';
import { DiscussionFile } from '../../models/discussion-file.interface';

export const discussionFileAdapter = (source?: ApiDiscussionFileDto | null): DiscussionFile => {
  return (source ?? {}) as DiscussionFile;
}
