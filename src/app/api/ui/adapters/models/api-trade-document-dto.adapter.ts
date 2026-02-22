import { TradeDocument } from '../../models/trade-document.interface';
import { ApiTradeDocumentDto } from '../../../swagger/models/api-trade-document-dto';
import { apiTradeDocumentTypeEnumAdapter } from '../enums/api-trade-document-type-enum.adapter';

export const apiTradeDocumentDtoAdapter = (source?: TradeDocument | null): ApiTradeDocumentDto => {
  return {
    FileName: source?.fileName,
    FileSize: source?.fileSize,
    Id: source?.id,
    TradeDocumentType: source?.tradeDocumentType === null ? undefined : apiTradeDocumentTypeEnumAdapter(source?.tradeDocumentType),
    UploadDate: source?.uploadDate,
    Url: source?.url,
    UserFileNameFromOuterSystem: source?.userFileNameFromOuterSystem,
  };
}
