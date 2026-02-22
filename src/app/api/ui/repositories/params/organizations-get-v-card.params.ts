import { OrganizationsGetVCard$Params } from '../../../swagger/fn/organizations/organizations-get-v-card';

// @ts-ignore
export interface OrganizationsGetVCardParams {
  guid: string;
}

export function organizationsGetVCardAdapter(params?: OrganizationsGetVCardParams): OrganizationsGetVCard$Params {
  if (!params) {
    return {} as OrganizationsGetVCard$Params;
  }
  return {
      guid: params.guid,
  };
}
