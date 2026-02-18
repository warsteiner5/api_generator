import { ApiExternalDealDocumentDto } from '../../../swagger/models/api-external-deal-document-dto';
import { ExternalDealDocument } from '../../models/external-deal-document.interface';
import { adaptTradeDocumentTypeEnumToUI } from './trade-document-type-enum.adapter';

export function adaptExternalDealDocumentToUI(source?: ApiExternalDealDocumentDto | null): ExternalDealDocument {
  return {
    fileName: source?.FileName ?? '',
    guidId: source?.GuidId ?? '',
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    size: source?.Size ?? 0,
    tradeDocumentType: adaptTradeDocumentTypeEnumToUI(source?.TradeDocumentType),
    uploadDate: source?.UploadDate ?? '',
  };
}
