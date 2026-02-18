import { ApiTradeDocumentDto } from '../../../swagger/models/api-trade-document-dto';
import { TradeDocument } from '../../models/trade-document.interface';
import { adaptTradeDocumentTypeEnumToUI } from './trade-document-type-enum.adapter';

export function adaptTradeDocumentToUI(source?: ApiTradeDocumentDto | null): TradeDocument {
  return {
    fileName: source?.FileName ?? '',
    fileSize: source?.FileSize ?? 0,
    id: source?.Id ?? '',
    tradeDocumentType: adaptTradeDocumentTypeEnumToUI(source?.TradeDocumentType),
    uploadDate: source?.UploadDate ?? '',
    url: source?.Url ?? '',
    userFileNameFromOuterSystem: source?.UserFileNameFromOuterSystem ?? '',
  };
}
