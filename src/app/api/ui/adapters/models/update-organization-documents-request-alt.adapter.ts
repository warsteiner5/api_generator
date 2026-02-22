import { ApiUpdateOrganizationDocumentsRequestAltDto } from '../../../swagger/models/api-update-organization-documents-request';
import { UpdateOrganizationDocumentsRequestAlt } from '../../models/update-organization-documents-request-alt.interface';
import { updateOrganizationDocumentAdapter } from './update-organization-document.adapter';

export const updateOrganizationDocumentsRequestAltAdapter = (source?: ApiUpdateOrganizationDocumentsRequestAltDto | null): UpdateOrganizationDocumentsRequestAlt => {
  return {
    otherDocuments: source?.OtherDocuments?.map((item) => updateOrganizationDocumentAdapter(item)),
    powerOfAttorneys: source?.PowerOfAttorneys?.map((item) => updateOrganizationDocumentAdapter(item)),
  };
}
