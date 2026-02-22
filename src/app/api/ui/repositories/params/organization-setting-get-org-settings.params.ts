import { OrganizationSettingGetOrgSettings$Params } from '../../../swagger/fn/organization-setting/organization-setting-get-org-settings';

// @ts-ignore
export interface OrganizationSettingGetOrgSettingsParams {
  tradeBusinessFlow: number;
  orgGuid: string;
  tenantId: number;
}

export function organizationSettingGetOrgSettingsAdapter(params?: OrganizationSettingGetOrgSettingsParams): OrganizationSettingGetOrgSettings$Params {
  if (!params) {
    return {} as OrganizationSettingGetOrgSettings$Params;
  }
  return {
      tradeBusinessFlow: params.tradeBusinessFlow,
      orgGuid: params.orgGuid,
      tenantId: params.tenantId,
  };
}
