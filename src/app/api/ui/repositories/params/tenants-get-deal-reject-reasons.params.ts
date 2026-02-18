import { TenantsGetDealRejectReasons$Params } from '../../../swagger/fn/tenants/tenants-get-deal-reject-reasons';

export interface TenantsGetDealRejectReasonsParams {
  id: number;
}

export const tenantsGetDealRejectReasonsParamsAdapter = {
  adapt(params?: TenantsGetDealRejectReasonsParams): TenantsGetDealRejectReasons$Params {
    if (!params) {
      return {} as TenantsGetDealRejectReasons$Params;
    }
    return {
      id: params.id,
    };
  }
};
