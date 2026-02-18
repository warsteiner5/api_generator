import { MarketOrganizationProfileContacts } from '../../models/market-organization-profile-contacts.interface';
import { OrganizationProfilesUpdateProfileContracts$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-contracts';
import { adaptApiMarketOrganizationProfileContactsDto } from '../../adapters/toDto/api-market-organization-profile-contacts-dto.adapter';

export interface OrganizationProfilesUpdateProfileContractsParams {
  body?: MarketOrganizationProfileContacts;
}

export const organizationProfilesUpdateProfileContractsParamsAdapter = {
  adapt(params?: OrganizationProfilesUpdateProfileContractsParams): OrganizationProfilesUpdateProfileContracts$Params {
    if (!params) {
      return {} as OrganizationProfilesUpdateProfileContracts$Params;
    }
    return {
      body: adaptApiMarketOrganizationProfileContactsDto(params.body),
    };
  }
};
