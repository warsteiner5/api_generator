import { ApiApplicationDocumentDto } from '../../../swagger/models/api-application-document-dto';
import { ApplicationDocument } from '../../models/application-document.interface';
import { tradeLotApplicationDocumentTypeEnumAdapter } from '../enums/trade-lot-application-document-type-enum.adapter';

export const applicationDocumentAdapter = (source?: ApiApplicationDocumentDto | null): ApplicationDocument => {
  return {
    documentType: source?.DocumentType === null ? undefined : tradeLotApplicationDocumentTypeEnumAdapter(source?.DocumentType),
    fileName: source?.FileName,
    fileSize: source?.FileSize,
    id: source?.Id,
    uploadDate: source?.UploadDate,
    url: source?.Url,
  };
}
