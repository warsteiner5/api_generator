import { FileStreamModelAlt } from '../../models/file-stream-model-alt.interface';
import { ApiFileStreamModelAltDto } from '../../../swagger/models/api-file-stream-model';
import { adaptApiStreamAltDto } from './api-stream.adapter';

export function adaptApiFileStreamModelAltDto(source?: FileStreamModelAlt | null): ApiFileStreamModelAltDto {
  return {
    ContentStream: adaptApiStreamAltDto(source?.contentStream),
    ContentType: source?.contentType,
    FileName: source?.fileName,
  };
}
