import { FileDocumentAlt } from '../../models/file-document-alt.interface';
import { ApiFileDocumentAltDto } from '../../../swagger/models/api-file-document';

export const apiFileDocumentAltDtoAdapter = (source?: FileDocumentAlt | null): ApiFileDocumentAltDto => {
  return {
    FileName: source?.fileName,
    Id: source?.id,
  };
}
