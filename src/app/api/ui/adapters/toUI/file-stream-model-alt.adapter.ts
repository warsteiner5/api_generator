import { ApiFileStreamModelAltDto } from '../../../swagger/models/api-file-stream-model';
import { FileStreamModelAlt } from '../../models/file-stream-model-alt.interface';
import { adaptStreamAltToUI } from './stream-alt.adapter';

export function adaptFileStreamModelAltToUI(source?: ApiFileStreamModelAltDto | null): FileStreamModelAlt {
  return {
    contentStream: adaptStreamAltToUI(source?.ContentStream),
    contentType: source?.ContentType ?? '',
    fileName: source?.FileName ?? '',
  };
}
