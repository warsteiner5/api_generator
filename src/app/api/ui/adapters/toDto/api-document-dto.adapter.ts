import { Document } from '../../models/document.interface';
import { ApiDocumentDto } from '../../../swagger/models/api-document-dto';
import { adaptApiTradeDocumentTypeEnum } from './api-trade-document-type-enum.adapter';

export function adaptApiDocumentDto(source?: Document | null): ApiDocumentDto {
  return {
    FileName: source?.fileName,
    Id: source?.id,
    TradeDocumentType: adaptApiTradeDocumentTypeEnum(source?.tradeDocumentType),
    UploadDate: source?.uploadDate,
    Url: source?.url,
  };
}
