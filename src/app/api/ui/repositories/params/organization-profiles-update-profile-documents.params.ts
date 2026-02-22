import { MarketOrganizationProfileDocument } from '../../models/market-organization-profile-document.interface';
import { OrganizationProfilesUpdateProfileDocuments$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-documents';
import { apiMarketOrganizationProfileDocumentDtoAdapter } from '../../adapters/models/api-market-organization-profile-document-dto.adapter';

// @ts-ignore
export interface OrganizationProfilesUpdateProfileDocumentsParams {
  body?: MarketOrganizationProfileDocument[];
}

export function organizationProfilesUpdateProfileDocumentsAdapter(params?: OrganizationProfilesUpdateProfileDocumentsParams): OrganizationProfilesUpdateProfileDocuments$Params {
  if (!params) {
    return {} as OrganizationProfilesUpdateProfileDocuments$Params;
  }
  return {
      body: (params.body ?? []).map((item) => apiMarketOrganizationProfileDocumentDtoAdapter(item)),
  };
}
