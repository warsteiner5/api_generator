import { FilesStatusAlt } from '../../models/files-status-alt.interface';
import { ApiFilesStatusAltDto } from '../../../swagger/models/api-files-status';

export function adaptApiFilesStatusAltDto(source?: FilesStatusAlt | null): ApiFilesStatusAltDto {
  return {
    delete_type: source?.deleteType,
    delete_url: source?.deleteUrl,
    error: source?.error,
    fileguid: source?.fileguid,
    group: source?.group,
    progress: source?.progress,
    size: source?.size,
    thumbnail_url: source?.thumbnailUrl,
    type: source?.type,
    url: source?.url,
    userfileextention: source?.userfileextention,
    userfilename: source?.userfilename,
  };
}
