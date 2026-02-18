import { ApiFilesStatusAltDto } from '../../../swagger/models/api-files-status';
import { FilesStatusAlt } from '../../models/files-status-alt.interface';

export function adaptFilesStatusAltToUI(source?: ApiFilesStatusAltDto | null): FilesStatusAlt {
  return {
    deleteType: source?.delete_type ?? '',
    deleteUrl: source?.delete_url ?? '',
    error: source?.error ?? '',
    fileguid: source?.fileguid ?? '',
    group: source?.group ?? '',
    progress: source?.progress ?? '',
    size: source?.size ?? 0,
    thumbnailUrl: source?.thumbnail_url ?? '',
    type: source?.type ?? '',
    url: source?.url ?? '',
    userfileextention: source?.userfileextention ?? '',
    userfilename: source?.userfilename ?? '',
  };
}
