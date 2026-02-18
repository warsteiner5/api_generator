import { ExternalDealDocument } from '../../models/external-deal-document.interface';
import { ApiExternalDealDocumentDto } from '../../../swagger/models/api-external-deal-document-dto';
import { adaptApiTradeDocumentTypeEnum } from './api-trade-document-type-enum.adapter';

export function adaptApiExternalDealDocumentDto(source?: ExternalDealDocument | null): ApiExternalDealDocumentDto {
  return {
    FileName: source?.fileName,
    GuidId: source?.guidId,
    Id: source?.id,
    Name: source?.name,
    Size: source?.size,
    TradeDocumentType: adaptApiTradeDocumentTypeEnum(source?.tradeDocumentType),
    UploadDate: source?.uploadDate,
  };
}
