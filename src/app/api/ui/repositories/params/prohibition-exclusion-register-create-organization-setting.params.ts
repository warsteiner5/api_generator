import { ProhibitionExclusionRegisterCreateOrganizationSetting$Params } from '../../../swagger/fn/prohibition-exclusion-register/prohibition-exclusion-register-create-organization-setting';
import { TenantOrganizationSettingRequestAlt } from '../../models/tenant-organization-setting-request-alt.interface';
import { apiTenantOrganizationSettingRequestAltDtoAdapter } from '../../adapters/models/api-tenant-organization-setting-request.adapter';

// @ts-ignore
export interface ProhibitionExclusionRegisterCreateOrganizationSettingParams {
  body?: TenantOrganizationSettingRequestAlt;
}

export function prohibitionExclusionRegisterCreateOrganizationSettingAdapter(params?: ProhibitionExclusionRegisterCreateOrganizationSettingParams): ProhibitionExclusionRegisterCreateOrganizationSetting$Params {
  if (!params) {
    return {} as ProhibitionExclusionRegisterCreateOrganizationSetting$Params;
  }
  return {
      body: apiTenantOrganizationSettingRequestAltDtoAdapter(params.body),
  };
}
