import { TenantsGetMarketRejectReasons$Params } from '../../../swagger/fn/tenants/tenants-get-market-reject-reasons';

// @ts-ignore
export interface TenantsGetMarketRejectReasonsParams {
  id: number;
}

export function tenantsGetMarketRejectReasonsAdapter(params?: TenantsGetMarketRejectReasonsParams): TenantsGetMarketRejectReasons$Params {
  if (!params) {
    return {} as TenantsGetMarketRejectReasons$Params;
  }
  return {
      id: params.id,
  };
}
