import { MarketCompositeOrganizationShortInfo } from '../../models/market-composite-organization-short-info.interface';
import { OrganizationsPatchOrganizationShortInfo$Params } from '../../../swagger/fn/organizations/organizations-patch-organization-short-info';
import { apiMarketCompositeOrganizationShortInfoDtoAdapter } from '../../adapters/models/api-market-composite-organization-short-info-dto.adapter';

// @ts-ignore
export interface OrganizationsPatchOrganizationShortInfoParams {
  body?: MarketCompositeOrganizationShortInfo;
}

export function organizationsPatchOrganizationShortInfoAdapter(params?: OrganizationsPatchOrganizationShortInfoParams): OrganizationsPatchOrganizationShortInfo$Params {
  if (!params) {
    return {} as OrganizationsPatchOrganizationShortInfo$Params;
  }
  return {
      body: apiMarketCompositeOrganizationShortInfoDtoAdapter(params.body),
  };
}
