import { TenantsGetDealRejectReasons$Params } from '../../../swagger/fn/tenants/tenants-get-deal-reject-reasons';

// @ts-ignore
export interface TenantsGetDealRejectReasonsParams {
  id: number;
}

export function tenantsGetDealRejectReasonsAdapter(params?: TenantsGetDealRejectReasonsParams): TenantsGetDealRejectReasons$Params {
  if (!params) {
    return {} as TenantsGetDealRejectReasons$Params;
  }
  return {
      id: params.id,
  };
}
