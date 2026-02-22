import { ExternalDealCardDeleteDocument } from '../../models/external-deal-card-delete-document.interface';
import { ApiExternalDealCardDeleteDocumentDto } from '../../../swagger/models/api-external-deal-card-delete-document-dto';

export const apiExternalDealCardDeleteDocumentDtoAdapter = (source?: ExternalDealCardDeleteDocument | null): ApiExternalDealCardDeleteDocumentDto => {
  return {
    DealId: source?.dealId,
    DocumentId: source?.documentId,
  };
}
