import { OrganizationSettingGetTenantSettingsByTenantId$Params } from '../../../swagger/fn/organization-setting/organization-setting-get-tenant-settings-by-tenant-id';

// @ts-ignore
export interface OrganizationSettingGetTenantSettingsByTenantIdParams {
  tenantId: number;
}

export function organizationSettingGetTenantSettingsByTenantIdAdapter(params?: OrganizationSettingGetTenantSettingsByTenantIdParams): OrganizationSettingGetTenantSettingsByTenantId$Params {
  if (!params) {
    return {} as OrganizationSettingGetTenantSettingsByTenantId$Params;
  }
  return {
      tenantId: params.tenantId,
  };
}
