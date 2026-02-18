import { FileContentModelAlt } from '../../models/file-content-model-alt.interface';
import { ApiFileContentModelAltDto } from '../../../swagger/models/api-file-content-model';

export function adaptApiFileContentModelAltDto(source?: FileContentModelAlt | null): ApiFileContentModelAltDto {
  return {
    Content: source?.content,
    ContentType: source?.contentType,
    FileName: source?.fileName,
  };
}
