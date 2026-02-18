import { TenantsGetMarketRejectReasons$Params } from '../../../swagger/fn/tenants/tenants-get-market-reject-reasons';

export interface TenantsGetMarketRejectReasonsParams {
  id: number;
}

export const tenantsGetMarketRejectReasonsParamsAdapter = {
  adapt(params?: TenantsGetMarketRejectReasonsParams): TenantsGetMarketRejectReasons$Params {
    if (!params) {
      return {} as TenantsGetMarketRejectReasons$Params;
    }
    return {
      id: params.id,
    };
  }
};
