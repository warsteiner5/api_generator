import { TenantCheckTenantPpIntegration$Params } from '../../../swagger/fn/tenant/tenant-check-tenant-pp-integration';

export interface TenantCheckTenantPpIntegrationParams {
  tenantId: number;
}

export const tenantCheckTenantPpIntegrationParamsAdapter = {
  adapt(params?: TenantCheckTenantPpIntegrationParams): TenantCheckTenantPpIntegration$Params {
    if (!params) {
      return {} as TenantCheckTenantPpIntegration$Params;
    }
    return {
      tenantId: params.tenantId,
    };
  }
};
