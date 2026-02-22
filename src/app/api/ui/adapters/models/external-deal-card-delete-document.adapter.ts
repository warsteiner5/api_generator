import { ApiExternalDealCardDeleteDocumentDto } from '../../../swagger/models/api-external-deal-card-delete-document-dto';
import { ExternalDealCardDeleteDocument } from '../../models/external-deal-card-delete-document.interface';

export const externalDealCardDeleteDocumentAdapter = (source?: ApiExternalDealCardDeleteDocumentDto | null): ExternalDealCardDeleteDocument => {
  return {
    dealId: source?.DealId,
    documentId: source?.DocumentId,
  };
}
