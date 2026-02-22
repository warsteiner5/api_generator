import { ProhibitionExclusionRegisterGetOrganizationSettings$Params } from '../../../swagger/fn/prohibition-exclusion-register/prohibition-exclusion-register-get-organization-settings';
import { TenantOrganizationSettingsFilterAlt } from '../../models/tenant-organization-settings-filter-alt.interface';
import { apiTenantOrganizationSettingsFilterAltDtoAdapter } from '../../adapters/models/api-tenant-organization-settings-filter.adapter';

// @ts-ignore
export interface ProhibitionExclusionRegisterGetOrganizationSettingsParams {
  body?: TenantOrganizationSettingsFilterAlt;
}

export function prohibitionExclusionRegisterGetOrganizationSettingsAdapter(params?: ProhibitionExclusionRegisterGetOrganizationSettingsParams): ProhibitionExclusionRegisterGetOrganizationSettings$Params {
  if (!params) {
    return {} as ProhibitionExclusionRegisterGetOrganizationSettings$Params;
  }
  return {
      body: apiTenantOrganizationSettingsFilterAltDtoAdapter(params.body),
  };
}
