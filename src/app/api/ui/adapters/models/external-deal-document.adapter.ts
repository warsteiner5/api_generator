import { ApiExternalDealDocumentDto } from '../../../swagger/models/api-external-deal-document-dto';
import { ExternalDealDocument } from '../../models/external-deal-document.interface';
import { tradeDocumentTypeEnumAdapter } from '../enums/trade-document-type-enum.adapter';

export const externalDealDocumentAdapter = (source?: ApiExternalDealDocumentDto | null): ExternalDealDocument => {
  return {
    fileName: source?.FileName,
    guidId: source?.GuidId,
    id: source?.Id,
    name: source?.Name,
    size: source?.Size,
    tradeDocumentType: source?.TradeDocumentType === null ? undefined : tradeDocumentTypeEnumAdapter(source?.TradeDocumentType),
    uploadDate: source?.UploadDate,
  };
}
