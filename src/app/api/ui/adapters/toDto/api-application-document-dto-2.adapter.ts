import { ApplicationDocumentDto2 } from '../../models/application-document-dto-2.interface';
import { ApiApplicationDocumentDto2 } from '../../../swagger/models/api-application-document-dto-2';

export function adaptApiApplicationDocumentDto2(source?: ApplicationDocumentDto2 | null): ApiApplicationDocumentDto2 {
  return {
    DocumentTypeId: source?.documentTypeId,
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    Name: source?.name,
  };
}
