import { TenantGetTenantHost$Params } from '../../../swagger/fn/tenant/tenant-get-tenant-host';

export interface TenantGetTenantHostParams {
  tenantId: number;
}

export const tenantGetTenantHostParamsAdapter = {
  adapt(params?: TenantGetTenantHostParams): TenantGetTenantHost$Params {
    if (!params) {
      return {} as TenantGetTenantHost$Params;
    }
    return {
      tenantId: params.tenantId,
    };
  }
};
