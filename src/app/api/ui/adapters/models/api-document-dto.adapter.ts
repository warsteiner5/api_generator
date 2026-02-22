import { Document } from '../../models/document.interface';
import { ApiDocumentDto } from '../../../swagger/models/api-document-dto';
import { apiTradeDocumentTypeEnumAdapter } from '../enums/api-trade-document-type-enum.adapter';

export const apiDocumentDtoAdapter = (source?: Document | null): ApiDocumentDto => {
  return {
    FileName: source?.fileName,
    Id: source?.id,
    TradeDocumentType: source?.tradeDocumentType === null ? undefined : apiTradeDocumentTypeEnumAdapter(source?.tradeDocumentType),
    UploadDate: source?.uploadDate,
    Url: source?.url,
  };
}
