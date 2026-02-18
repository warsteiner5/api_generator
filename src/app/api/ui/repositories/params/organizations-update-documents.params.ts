import { OrganizationsUpdateDocuments$Params } from '../../../swagger/fn/organizations/organizations-update-documents';
import { UpdateOrganizationDocumentsRequestAlt } from '../../models/update-organization-documents-request-alt.interface';
import { adaptApiUpdateOrganizationDocumentsRequestAltDto } from '../../adapters/toDto/api-update-organization-documents-request.adapter';

export interface OrganizationsUpdateDocumentsParams {
  body?: UpdateOrganizationDocumentsRequestAlt;
}

export const organizationsUpdateDocumentsParamsAdapter = {
  adapt(params?: OrganizationsUpdateDocumentsParams): OrganizationsUpdateDocuments$Params {
    if (!params) {
      return {} as OrganizationsUpdateDocuments$Params;
    }
    return {
      body: adaptApiUpdateOrganizationDocumentsRequestAltDto(params.body),
    };
  }
};
