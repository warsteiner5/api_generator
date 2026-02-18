import { ApiApplicationDocumentDto2 } from '../../../swagger/models/api-application-document-dto-2';
import { ApplicationDocumentDto2 } from '../../models/application-document-dto-2.interface';

export function adaptApplicationDocumentDto2ToUI(source?: ApiApplicationDocumentDto2 | null): ApplicationDocumentDto2 {
  return {
    documentTypeId: source?.DocumentTypeId ?? 0,
    fileGuid: source?.FileGuid ?? '',
    fileName: source?.FileName ?? '',
    name: source?.Name ?? '',
  };
}
