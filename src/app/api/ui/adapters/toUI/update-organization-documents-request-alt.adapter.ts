import { ApiUpdateOrganizationDocumentsRequestAltDto } from '../../../swagger/models/api-update-organization-documents-request';
import { UpdateOrganizationDocumentsRequestAlt } from '../../models/update-organization-documents-request-alt.interface';
import { adaptUpdateOrganizationDocumentToUI } from './update-organization-document.adapter';

export function adaptUpdateOrganizationDocumentsRequestAltToUI(source?: ApiUpdateOrganizationDocumentsRequestAltDto | null): UpdateOrganizationDocumentsRequestAlt {
  return {
    otherDocuments: (source?.OtherDocuments ?? []).map((item) => adaptUpdateOrganizationDocumentToUI(item)),
    powerOfAttorneys: (source?.PowerOfAttorneys ?? []).map((item) => adaptUpdateOrganizationDocumentToUI(item)),
  };
}
