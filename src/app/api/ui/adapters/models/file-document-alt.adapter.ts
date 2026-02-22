import { ApiFileDocumentAltDto } from '../../../swagger/models/api-file-document';
import { FileDocumentAlt } from '../../models/file-document-alt.interface';

export const fileDocumentAltAdapter = (source?: ApiFileDocumentAltDto | null): FileDocumentAlt => {
  return {
    fileName: source?.FileName,
    id: source?.Id,
  };
}
