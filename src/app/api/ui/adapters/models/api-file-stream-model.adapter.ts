import { FileStreamModelAlt } from '../../models/file-stream-model-alt.interface';
import { ApiFileStreamModelAltDto } from '../../../swagger/models/api-file-stream-model';
import { apiStreamAltDtoAdapter } from './api-stream.adapter';

export const apiFileStreamModelAltDtoAdapter = (source?: FileStreamModelAlt | null): ApiFileStreamModelAltDto => {
  return {
    ContentStream: source?.contentStream === null ? undefined : apiStreamAltDtoAdapter(source?.contentStream),
    ContentType: source?.contentType,
    FileName: source?.fileName,
  };
}
