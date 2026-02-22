import { ApiPrivateDocumentDto } from '../../../swagger/models/api-private-document-dto';
import { PrivateDocument } from '../../models/private-document.interface';

export const privateDocumentAdapter = (source?: ApiPrivateDocumentDto | null): PrivateDocument => {
  return {
    documentType: source?.DocumentType,
    fileGuid: source?.FileGuid,
    fileName: source?.FileName,
    fileSize: source?.FileSize,
  };
}
