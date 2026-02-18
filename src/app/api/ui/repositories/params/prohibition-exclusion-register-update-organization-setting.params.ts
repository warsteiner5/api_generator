import { ProhibitionExclusionRegisterUpdateOrganizationSetting$Params } from '../../../swagger/fn/prohibition-exclusion-register/prohibition-exclusion-register-update-organization-setting';
import { TenantOrganizationSettingRequestAlt } from '../../models/tenant-organization-setting-request-alt.interface';
import { adaptApiTenantOrganizationSettingRequestAltDto } from '../../adapters/toDto/api-tenant-organization-setting-request.adapter';

export interface ProhibitionExclusionRegisterUpdateOrganizationSettingParams {
  body?: TenantOrganizationSettingRequestAlt;
}

export const prohibitionExclusionRegisterUpdateOrganizationSettingParamsAdapter = {
  adapt(params?: ProhibitionExclusionRegisterUpdateOrganizationSettingParams): ProhibitionExclusionRegisterUpdateOrganizationSetting$Params {
    if (!params) {
      return {} as ProhibitionExclusionRegisterUpdateOrganizationSetting$Params;
    }
    return {
      body: adaptApiTenantOrganizationSettingRequestAltDto(params.body),
    };
  }
};
