import { ExternalDealCardDocumentsUpload } from '../../models/external-deal-card-documents-upload.interface';
import { ApiExternalDealCardDocumentsUploadDto } from '../../../swagger/models/api-external-deal-card-documents-upload-dto';
import { adaptApiExternalDealCardDocumentDto } from './api-external-deal-card-document-dto.adapter';

export function adaptApiExternalDealCardDocumentsUploadDto(source?: ExternalDealCardDocumentsUpload | null): ApiExternalDealCardDocumentsUploadDto {
  return {
    DealId: source?.dealId,
    Documents: (source?.documents ?? []).map((item) => adaptApiExternalDealCardDocumentDto(item)),
  };
}
