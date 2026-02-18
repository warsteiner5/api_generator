import { OrganizationSettingGetTenantSettingsByTenantId$Params } from '../../../swagger/fn/organization-setting/organization-setting-get-tenant-settings-by-tenant-id';

export interface OrganizationSettingGetTenantSettingsByTenantIdParams {
  tenantId: number;
}

export const organizationSettingGetTenantSettingsByTenantIdParamsAdapter = {
  adapt(params?: OrganizationSettingGetTenantSettingsByTenantIdParams): OrganizationSettingGetTenantSettingsByTenantId$Params {
    if (!params) {
      return {} as OrganizationSettingGetTenantSettingsByTenantId$Params;
    }
    return {
      tenantId: params.tenantId,
    };
  }
};
