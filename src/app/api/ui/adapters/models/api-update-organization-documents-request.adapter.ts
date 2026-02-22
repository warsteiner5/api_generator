import { UpdateOrganizationDocumentsRequestAlt } from '../../models/update-organization-documents-request-alt.interface';
import { ApiUpdateOrganizationDocumentsRequestAltDto } from '../../../swagger/models/api-update-organization-documents-request';
import { apiUpdateOrganizationDocumentDtoAdapter } from './api-update-organization-document-dto.adapter';

export const apiUpdateOrganizationDocumentsRequestAltDtoAdapter = (source?: UpdateOrganizationDocumentsRequestAlt | null): ApiUpdateOrganizationDocumentsRequestAltDto => {
  return {
    OtherDocuments: source?.otherDocuments?.map((item) => apiUpdateOrganizationDocumentDtoAdapter(item)),
    PowerOfAttorneys: source?.powerOfAttorneys?.map((item) => apiUpdateOrganizationDocumentDtoAdapter(item)),
  };
}
