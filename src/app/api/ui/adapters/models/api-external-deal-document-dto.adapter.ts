import { ExternalDealDocument } from '../../models/external-deal-document.interface';
import { ApiExternalDealDocumentDto } from '../../../swagger/models/api-external-deal-document-dto';
import { apiTradeDocumentTypeEnumAdapter } from '../enums/api-trade-document-type-enum.adapter';

export const apiExternalDealDocumentDtoAdapter = (source?: ExternalDealDocument | null): ApiExternalDealDocumentDto => {
  return {
    FileName: source?.fileName,
    GuidId: source?.guidId,
    Id: source?.id,
    Name: source?.name,
    Size: source?.size,
    TradeDocumentType: source?.tradeDocumentType === null ? undefined : apiTradeDocumentTypeEnumAdapter(source?.tradeDocumentType),
    UploadDate: source?.uploadDate,
  };
}
