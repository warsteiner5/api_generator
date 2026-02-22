import { ProhibitionExclusionRegisterUpdateOrganizationSetting$Params } from '../../../swagger/fn/prohibition-exclusion-register/prohibition-exclusion-register-update-organization-setting';
import { TenantOrganizationSettingRequestAlt } from '../../models/tenant-organization-setting-request-alt.interface';
import { apiTenantOrganizationSettingRequestAltDtoAdapter } from '../../adapters/models/api-tenant-organization-setting-request.adapter';

// @ts-ignore
export interface ProhibitionExclusionRegisterUpdateOrganizationSettingParams {
  body?: TenantOrganizationSettingRequestAlt;
}

export function prohibitionExclusionRegisterUpdateOrganizationSettingAdapter(params?: ProhibitionExclusionRegisterUpdateOrganizationSettingParams): ProhibitionExclusionRegisterUpdateOrganizationSetting$Params {
  if (!params) {
    return {} as ProhibitionExclusionRegisterUpdateOrganizationSetting$Params;
  }
  return {
      body: apiTenantOrganizationSettingRequestAltDtoAdapter(params.body),
  };
}
