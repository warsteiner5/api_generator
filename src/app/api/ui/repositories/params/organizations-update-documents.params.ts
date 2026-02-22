import { OrganizationsUpdateDocuments$Params } from '../../../swagger/fn/organizations/organizations-update-documents';
import { UpdateOrganizationDocumentsRequestAlt } from '../../models/update-organization-documents-request-alt.interface';
import { apiUpdateOrganizationDocumentsRequestAltDtoAdapter } from '../../adapters/models/api-update-organization-documents-request.adapter';

// @ts-ignore
export interface OrganizationsUpdateDocumentsParams {
  body?: UpdateOrganizationDocumentsRequestAlt;
}

export function organizationsUpdateDocumentsAdapter(params?: OrganizationsUpdateDocumentsParams): OrganizationsUpdateDocuments$Params {
  if (!params) {
    return {} as OrganizationsUpdateDocuments$Params;
  }
  return {
      body: apiUpdateOrganizationDocumentsRequestAltDtoAdapter(params.body),
  };
}
