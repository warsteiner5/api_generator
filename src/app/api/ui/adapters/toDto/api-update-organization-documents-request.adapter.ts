import { UpdateOrganizationDocumentsRequestAlt } from '../../models/update-organization-documents-request-alt.interface';
import { ApiUpdateOrganizationDocumentsRequestAltDto } from '../../../swagger/models/api-update-organization-documents-request';
import { adaptApiUpdateOrganizationDocumentDto } from './api-update-organization-document-dto.adapter';

export function adaptApiUpdateOrganizationDocumentsRequestAltDto(source?: UpdateOrganizationDocumentsRequestAlt | null): ApiUpdateOrganizationDocumentsRequestAltDto {
  return {
    OtherDocuments: (source?.otherDocuments ?? []).map((item) => adaptApiUpdateOrganizationDocumentDto(item)),
    PowerOfAttorneys: (source?.powerOfAttorneys ?? []).map((item) => adaptApiUpdateOrganizationDocumentDto(item)),
  };
}
