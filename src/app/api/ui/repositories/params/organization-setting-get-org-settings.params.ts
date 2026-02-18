import { OrganizationSettingGetOrgSettings$Params } from '../../../swagger/fn/organization-setting/organization-setting-get-org-settings';

export interface OrganizationSettingGetOrgSettingsParams {
  tradeBusinessFlow: number;
  orgGuid: string;
  tenantId: number;
}

export const organizationSettingGetOrgSettingsParamsAdapter = {
  adapt(params?: OrganizationSettingGetOrgSettingsParams): OrganizationSettingGetOrgSettings$Params {
    if (!params) {
      return {} as OrganizationSettingGetOrgSettings$Params;
    }
    return {
      tradeBusinessFlow: params.tradeBusinessFlow,
      orgGuid: params.orgGuid,
      tenantId: params.tenantId,
    };
  }
};
