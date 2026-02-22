import { PrivateDocument } from '../../models/private-document.interface';
import { ApiPrivateDocumentDto } from '../../../swagger/models/api-private-document-dto';

export const apiPrivateDocumentDtoAdapter = (source?: PrivateDocument | null): ApiPrivateDocumentDto => {
  return {
    DocumentType: source?.documentType,
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    FileSize: source?.fileSize,
  };
}
