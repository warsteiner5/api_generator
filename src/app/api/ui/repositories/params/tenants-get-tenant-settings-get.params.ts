import { TenantsGetTenantSettingsGet$Params } from '../../../swagger/fn/tenants/tenants-get-tenant-settings-get';

// @ts-ignore
export interface TenantsGetTenantSettingsGetParams {
  id: number;
}

export function tenantsGetTenantSettingsGetAdapter(params?: TenantsGetTenantSettingsGetParams): TenantsGetTenantSettingsGet$Params {
  if (!params) {
    return {} as TenantsGetTenantSettingsGet$Params;
  }
  return {
      id: params.id,
  };
}
