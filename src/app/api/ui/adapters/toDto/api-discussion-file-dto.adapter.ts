import { DiscussionFile } from '../../models/discussion-file.interface';
import { ApiDiscussionFileDto } from '../../../swagger/models/api-discussion-file-dto';

export function adaptApiDiscussionFileDto(source?: DiscussionFile | null): ApiDiscussionFileDto {
  return (source ?? {}) as ApiDiscussionFileDto;
}
