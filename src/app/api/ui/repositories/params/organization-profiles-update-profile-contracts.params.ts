import { MarketOrganizationProfileContacts } from '../../models/market-organization-profile-contacts.interface';
import { OrganizationProfilesUpdateProfileContracts$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-contracts';
import { apiMarketOrganizationProfileContactsDtoAdapter } from '../../adapters/models/api-market-organization-profile-contacts-dto.adapter';

// @ts-ignore
export interface OrganizationProfilesUpdateProfileContractsParams {
  body?: MarketOrganizationProfileContacts;
}

export function organizationProfilesUpdateProfileContractsAdapter(params?: OrganizationProfilesUpdateProfileContractsParams): OrganizationProfilesUpdateProfileContracts$Params {
  if (!params) {
    return {} as OrganizationProfilesUpdateProfileContracts$Params;
  }
  return {
      body: apiMarketOrganizationProfileContactsDtoAdapter(params.body),
  };
}
