import { ApiDocumentDto } from '../../../swagger/models/api-document-dto';
import { Document } from '../../models/document.interface';
import { adaptTradeDocumentTypeEnumToUI } from './trade-document-type-enum.adapter';

export function adaptDocumentToUI(source?: ApiDocumentDto | null): Document {
  return {
    fileName: source?.FileName ?? '',
    id: source?.Id ?? '',
    tradeDocumentType: adaptTradeDocumentTypeEnumToUI(source?.TradeDocumentType),
    uploadDate: source?.UploadDate ?? '',
    url: source?.Url ?? '',
  };
}
