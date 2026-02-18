import { ApiApplicationDocumentDto } from '../../../swagger/models/api-application-document-dto';
import { ApplicationDocument } from '../../models/application-document.interface';
import { adaptTradeLotApplicationDocumentTypeEnumToUI } from './trade-lot-application-document-type-enum.adapter';

export function adaptApplicationDocumentToUI(source?: ApiApplicationDocumentDto | null): ApplicationDocument {
  return {
    documentType: adaptTradeLotApplicationDocumentTypeEnumToUI(source?.DocumentType),
    fileName: source?.FileName ?? '',
    fileSize: source?.FileSize ?? 0,
    id: source?.Id ?? '',
    uploadDate: source?.UploadDate ?? '',
    url: source?.Url ?? '',
  };
}
