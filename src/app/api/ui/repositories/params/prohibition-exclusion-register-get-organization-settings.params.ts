import { ProhibitionExclusionRegisterGetOrganizationSettings$Params } from '../../../swagger/fn/prohibition-exclusion-register/prohibition-exclusion-register-get-organization-settings';
import { TenantOrganizationSettingsFilterAlt } from '../../models/tenant-organization-settings-filter-alt.interface';
import { adaptApiTenantOrganizationSettingsFilterAltDto } from '../../adapters/toDto/api-tenant-organization-settings-filter.adapter';

export interface ProhibitionExclusionRegisterGetOrganizationSettingsParams {
  body?: TenantOrganizationSettingsFilterAlt;
}

export const prohibitionExclusionRegisterGetOrganizationSettingsParamsAdapter = {
  adapt(params?: ProhibitionExclusionRegisterGetOrganizationSettingsParams): ProhibitionExclusionRegisterGetOrganizationSettings$Params {
    if (!params) {
      return {} as ProhibitionExclusionRegisterGetOrganizationSettings$Params;
    }
    return {
      body: adaptApiTenantOrganizationSettingsFilterAltDto(params.body),
    };
  }
};
