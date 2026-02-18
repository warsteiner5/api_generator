import { ProhibitionExclusionRegisterCreateOrganizationSetting$Params } from '../../../swagger/fn/prohibition-exclusion-register/prohibition-exclusion-register-create-organization-setting';
import { TenantOrganizationSettingRequestAlt } from '../../models/tenant-organization-setting-request-alt.interface';
import { adaptApiTenantOrganizationSettingRequestAltDto } from '../../adapters/toDto/api-tenant-organization-setting-request.adapter';

export interface ProhibitionExclusionRegisterCreateOrganizationSettingParams {
  body?: TenantOrganizationSettingRequestAlt;
}

export const prohibitionExclusionRegisterCreateOrganizationSettingParamsAdapter = {
  adapt(params?: ProhibitionExclusionRegisterCreateOrganizationSettingParams): ProhibitionExclusionRegisterCreateOrganizationSetting$Params {
    if (!params) {
      return {} as ProhibitionExclusionRegisterCreateOrganizationSetting$Params;
    }
    return {
      body: adaptApiTenantOrganizationSettingRequestAltDto(params.body),
    };
  }
};
