import { ApiExternalDealCardDocumentsUploadDto } from '../../../swagger/models/api-external-deal-card-documents-upload-dto';
import { ExternalDealCardDocumentsUpload } from '../../models/external-deal-card-documents-upload.interface';
import { externalDealCardDocumentAdapter } from './external-deal-card-document.adapter';

export const externalDealCardDocumentsUploadAdapter = (source?: ApiExternalDealCardDocumentsUploadDto | null): ExternalDealCardDocumentsUpload => {
  return {
    dealId: source?.DealId,
    documents: source?.Documents?.map((item) => externalDealCardDocumentAdapter(item)),
  };
}
