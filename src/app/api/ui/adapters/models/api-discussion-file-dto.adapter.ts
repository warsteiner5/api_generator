import { DiscussionFile } from '../../models/discussion-file.interface';
import { ApiDiscussionFileDto } from '../../../swagger/models/api-discussion-file-dto';

export const apiDiscussionFileDtoAdapter = (source?: DiscussionFile | null): ApiDiscussionFileDto => {
  return (source ?? {}) as ApiDiscussionFileDto;
}
