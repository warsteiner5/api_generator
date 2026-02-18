import { TenantGetGlobalMarketTenantHost$Params } from '../../../swagger/fn/tenant/tenant-get-global-market-tenant-host';

export interface TenantGetGlobalMarketTenantHostParams {
}

export const tenantGetGlobalMarketTenantHostParamsAdapter = {
  adapt(params?: TenantGetGlobalMarketTenantHostParams): TenantGetGlobalMarketTenantHost$Params {
    if (!params) {
      return {} as TenantGetGlobalMarketTenantHost$Params;
    }
    return {
    };
  }
};
