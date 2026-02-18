import { OrganizationsGetOrganizationDocuments2$Params } from '../../../swagger/fn/organizations/organizations-get-organization-documents-2';

export interface OrganizationsGetOrganizationDocuments2Params {
  guid: string;
}

export const organizationsGetOrganizationDocuments2ParamsAdapter = {
  adapt(params?: OrganizationsGetOrganizationDocuments2Params): OrganizationsGetOrganizationDocuments2$Params {
    if (!params) {
      return {} as OrganizationsGetOrganizationDocuments2$Params;
    }
    return {
      guid: params.guid,
    };
  }
};
