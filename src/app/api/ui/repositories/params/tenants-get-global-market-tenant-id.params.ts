import { TenantsGetGlobalMarketTenantId$Params } from '../../../swagger/fn/tenants/tenants-get-global-market-tenant-id';

export interface TenantsGetGlobalMarketTenantIdParams {
}

export const tenantsGetGlobalMarketTenantIdParamsAdapter = {
  adapt(params?: TenantsGetGlobalMarketTenantIdParams): TenantsGetGlobalMarketTenantId$Params {
    if (!params) {
      return {} as TenantsGetGlobalMarketTenantId$Params;
    }
    return {
    };
  }
};
