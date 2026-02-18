import { MarketOrganizationProfileDocument } from '../../models/market-organization-profile-document.interface';
import { OrganizationProfilesUpdateProfileDocuments$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-documents';
import { adaptApiMarketOrganizationProfileDocumentDto } from '../../adapters/toDto/api-market-organization-profile-document-dto.adapter';

export interface OrganizationProfilesUpdateProfileDocumentsParams {
  body?: MarketOrganizationProfileDocument[];
}

export const organizationProfilesUpdateProfileDocumentsParamsAdapter = {
  adapt(params?: OrganizationProfilesUpdateProfileDocumentsParams): OrganizationProfilesUpdateProfileDocuments$Params {
    if (!params) {
      return {} as OrganizationProfilesUpdateProfileDocuments$Params;
    }
    return {
      body: (params.body ?? []).map((item) => adaptApiMarketOrganizationProfileDocumentDto(item)),
    };
  }
};
