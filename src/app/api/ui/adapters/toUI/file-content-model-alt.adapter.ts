import { ApiFileContentModelAltDto } from '../../../swagger/models/api-file-content-model';
import { FileContentModelAlt } from '../../models/file-content-model-alt.interface';

export function adaptFileContentModelAltToUI(source?: ApiFileContentModelAltDto | null): FileContentModelAlt {
  return {
    content: source?.Content ?? '',
    contentType: source?.ContentType ?? '',
    fileName: source?.FileName ?? '',
  };
}
