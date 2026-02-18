import { OrganizationsGetOrganizationDocuments$Params } from '../../../swagger/fn/organizations/organizations-get-organization-documents';

export interface OrganizationsGetOrganizationDocumentsParams {
}

export const organizationsGetOrganizationDocumentsParamsAdapter = {
  adapt(params?: OrganizationsGetOrganizationDocumentsParams): OrganizationsGetOrganizationDocuments$Params {
    if (!params) {
      return {} as OrganizationsGetOrganizationDocuments$Params;
    }
    return {
    };
  }
};
