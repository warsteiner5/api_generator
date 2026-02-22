import { ApiDocumentDto } from '../../../swagger/models/api-document-dto';
import { Document } from '../../models/document.interface';
import { tradeDocumentTypeEnumAdapter } from '../enums/trade-document-type-enum.adapter';

export const documentAdapter = (source?: ApiDocumentDto | null): Document => {
  return {
    fileName: source?.FileName,
    id: source?.Id,
    tradeDocumentType: source?.TradeDocumentType === null ? undefined : tradeDocumentTypeEnumAdapter(source?.TradeDocumentType),
    uploadDate: source?.UploadDate,
    url: source?.Url,
  };
}
