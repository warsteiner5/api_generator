import { ApiExternalDealCardDeleteDocumentDto } from '../../../swagger/models/api-external-deal-card-delete-document-dto';
import { ExternalDealCardDeleteDocument } from '../../models/external-deal-card-delete-document.interface';

export function adaptExternalDealCardDeleteDocumentToUI(source?: ApiExternalDealCardDeleteDocumentDto | null): ExternalDealCardDeleteDocument {
  return {
    dealId: source?.DealId ?? 0,
    documentId: source?.DocumentId ?? 0,
  };
}
