import { ApiExternalDealCardDocumentsUploadDto } from '../../../swagger/models/api-external-deal-card-documents-upload-dto';
import { ExternalDealCardDocumentsUpload } from '../../models/external-deal-card-documents-upload.interface';
import { adaptExternalDealCardDocumentToUI } from './external-deal-card-document.adapter';

export function adaptExternalDealCardDocumentsUploadToUI(source?: ApiExternalDealCardDocumentsUploadDto | null): ExternalDealCardDocumentsUpload {
  return {
    dealId: source?.DealId ?? 0,
    documents: (source?.Documents ?? []).map((item) => adaptExternalDealCardDocumentToUI(item)),
  };
}
