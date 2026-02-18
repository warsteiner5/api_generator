import { ActualDocumentInfoAlt } from '../../models/actual-document-info-alt.interface';
import { ApiActualDocumentInfoAltDto } from '../../../swagger/models/api-actual-document-info';
import { adaptApiDealDocumentDto } from './api-deal-document-dto.adapter';

export function adaptApiActualDocumentInfoAltDto(source?: ActualDocumentInfoAlt | null): ApiActualDocumentInfoAltDto {
  return {
    Description: source?.description,
    DocumentType: source?.documentType,
    Documents: (source?.documents ?? []).map((item) => adaptApiDealDocumentDto(item)),
  };
}
