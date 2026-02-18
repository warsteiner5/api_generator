import { TradeDocument } from '../../models/trade-document.interface';
import { ApiTradeDocumentDto } from '../../../swagger/models/api-trade-document-dto';
import { adaptApiTradeDocumentTypeEnum } from './api-trade-document-type-enum.adapter';

export function adaptApiTradeDocumentDto(source?: TradeDocument | null): ApiTradeDocumentDto {
  return {
    FileName: source?.fileName,
    FileSize: source?.fileSize,
    Id: source?.id,
    TradeDocumentType: adaptApiTradeDocumentTypeEnum(source?.tradeDocumentType),
    UploadDate: source?.uploadDate,
    Url: source?.url,
    UserFileNameFromOuterSystem: source?.userFileNameFromOuterSystem,
  };
}
