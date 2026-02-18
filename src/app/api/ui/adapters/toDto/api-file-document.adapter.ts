import { FileDocumentAlt } from '../../models/file-document-alt.interface';
import { ApiFileDocumentAltDto } from '../../../swagger/models/api-file-document';

export function adaptApiFileDocumentAltDto(source?: FileDocumentAlt | null): ApiFileDocumentAltDto {
  return {
    FileName: source?.fileName,
    Id: source?.id,
  };
}
