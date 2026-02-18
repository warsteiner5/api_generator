import { TenantsGetTenantSettingsGet$Params } from '../../../swagger/fn/tenants/tenants-get-tenant-settings-get';

export interface TenantsGetTenantSettingsGetParams {
  id: number;
}

export const tenantsGetTenantSettingsGetParamsAdapter = {
  adapt(params?: TenantsGetTenantSettingsGetParams): TenantsGetTenantSettingsGet$Params {
    if (!params) {
      return {} as TenantsGetTenantSettingsGet$Params;
    }
    return {
      id: params.id,
    };
  }
};
