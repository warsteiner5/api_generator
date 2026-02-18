import { ApiDiscussionFileDto } from '../../../swagger/models/api-discussion-file-dto';
import { DiscussionFile } from '../../models/discussion-file.interface';

export function adaptDiscussionFileToUI(source?: ApiDiscussionFileDto | null): DiscussionFile {
  return (source ?? {}) as DiscussionFile;
}
