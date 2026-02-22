import { ApiFileStreamModelAltDto } from '../../../swagger/models/api-file-stream-model';
import { FileStreamModelAlt } from '../../models/file-stream-model-alt.interface';
import { streamAltAdapter } from './stream-alt.adapter';

export const fileStreamModelAltAdapter = (source?: ApiFileStreamModelAltDto | null): FileStreamModelAlt => {
  return {
    contentStream: source?.ContentStream === null ? undefined : streamAltAdapter(source?.ContentStream),
    contentType: source?.ContentType,
    fileName: source?.FileName,
  };
}
