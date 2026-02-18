import { MarketCompositeOrganizationShortInfo } from '../../models/market-composite-organization-short-info.interface';
import { OrganizationsPatchOrganizationShortInfo$Params } from '../../../swagger/fn/organizations/organizations-patch-organization-short-info';
import { adaptApiMarketCompositeOrganizationShortInfoDto } from '../../adapters/toDto/api-market-composite-organization-short-info-dto.adapter';

export interface OrganizationsPatchOrganizationShortInfoParams {
  body?: MarketCompositeOrganizationShortInfo;
}

export const organizationsPatchOrganizationShortInfoParamsAdapter = {
  adapt(params?: OrganizationsPatchOrganizationShortInfoParams): OrganizationsPatchOrganizationShortInfo$Params {
    if (!params) {
      return {} as OrganizationsPatchOrganizationShortInfo$Params;
    }
    return {
      body: adaptApiMarketCompositeOrganizationShortInfoDto(params.body),
    };
  }
};
