import { ExternalDealCardDocumentsUpload } from '../../models/external-deal-card-documents-upload.interface';
import { ApiExternalDealCardDocumentsUploadDto } from '../../../swagger/models/api-external-deal-card-documents-upload-dto';
import { apiExternalDealCardDocumentDtoAdapter } from './api-external-deal-card-document-dto.adapter';

export const apiExternalDealCardDocumentsUploadDtoAdapter = (source?: ExternalDealCardDocumentsUpload | null): ApiExternalDealCardDocumentsUploadDto => {
  return {
    DealId: source?.dealId,
    Documents: source?.documents?.map((item) => apiExternalDealCardDocumentDtoAdapter(item)),
  };
}
