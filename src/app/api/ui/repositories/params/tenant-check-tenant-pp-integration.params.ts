import { TenantCheckTenantPpIntegration$Params } from '../../../swagger/fn/tenant/tenant-check-tenant-pp-integration';

// @ts-ignore
export interface TenantCheckTenantPpIntegrationParams {
  tenantId: number;
}

export function tenantCheckTenantPpIntegrationAdapter(params?: TenantCheckTenantPpIntegrationParams): TenantCheckTenantPpIntegration$Params {
  if (!params) {
    return {} as TenantCheckTenantPpIntegration$Params;
  }
  return {
      tenantId: params.tenantId,
  };
}
