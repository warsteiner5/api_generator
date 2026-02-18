import { OrganizationsApplyHomeRegionMessage$Params } from '../../../swagger/fn/organizations/organizations-apply-home-region-message';

export interface OrganizationsApplyHomeRegionMessageParams {
}

export const organizationsApplyHomeRegionMessageParamsAdapter = {
  adapt(params?: OrganizationsApplyHomeRegionMessageParams): OrganizationsApplyHomeRegionMessage$Params {
    if (!params) {
      return {} as OrganizationsApplyHomeRegionMessage$Params;
    }
    return {
    };
  }
};
