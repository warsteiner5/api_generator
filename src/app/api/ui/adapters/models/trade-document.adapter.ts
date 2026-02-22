import { ApiTradeDocumentDto } from '../../../swagger/models/api-trade-document-dto';
import { TradeDocument } from '../../models/trade-document.interface';
import { tradeDocumentTypeEnumAdapter } from '../enums/trade-document-type-enum.adapter';

export const tradeDocumentAdapter = (source?: ApiTradeDocumentDto | null): TradeDocument => {
  return {
    fileName: source?.FileName,
    fileSize: source?.FileSize,
    id: source?.Id,
    tradeDocumentType: source?.TradeDocumentType === null ? undefined : tradeDocumentTypeEnumAdapter(source?.TradeDocumentType),
    uploadDate: source?.UploadDate,
    url: source?.Url,
    userFileNameFromOuterSystem: source?.UserFileNameFromOuterSystem,
  };
}
