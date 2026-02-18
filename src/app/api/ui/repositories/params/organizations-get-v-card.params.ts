import { OrganizationsGetVCard$Params } from '../../../swagger/fn/organizations/organizations-get-v-card';

export interface OrganizationsGetVCardParams {
  guid: string;
}

export const organizationsGetVCardParamsAdapter = {
  adapt(params?: OrganizationsGetVCardParams): OrganizationsGetVCard$Params {
    if (!params) {
      return {} as OrganizationsGetVCard$Params;
    }
    return {
      guid: params.guid,
    };
  }
};
