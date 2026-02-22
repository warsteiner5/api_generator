import { ApiApplicationDocumentDto2 } from '../../../swagger/models/api-application-document-dto-2';
import { ApplicationDocumentDto2 } from '../../models/application-document-dto-2.interface';

export const applicationDocumentDto2Adapter = (source?: ApiApplicationDocumentDto2 | null): ApplicationDocumentDto2 => {
  return {
    documentTypeId: source?.DocumentTypeId,
    fileGuid: source?.FileGuid,
    fileName: source?.FileName,
    name: source?.Name,
  };
}
