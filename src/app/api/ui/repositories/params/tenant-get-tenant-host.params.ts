import { TenantGetTenantHost$Params } from '../../../swagger/fn/tenant/tenant-get-tenant-host';

// @ts-ignore
export interface TenantGetTenantHostParams {
  tenantId: number;
}

export function tenantGetTenantHostAdapter(params?: TenantGetTenantHostParams): TenantGetTenantHost$Params {
  if (!params) {
    return {} as TenantGetTenantHost$Params;
  }
  return {
      tenantId: params.tenantId,
  };
}
