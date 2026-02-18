import { ProhibitionExclusionRegisterDeleteOrganizationSetting$Params } from '../../../swagger/fn/prohibition-exclusion-register/prohibition-exclusion-register-delete-organization-setting';

export interface ProhibitionExclusionRegisterDeleteOrganizationSettingParams {
  id: number;
}

export const prohibitionExclusionRegisterDeleteOrganizationSettingParamsAdapter = {
  adapt(params?: ProhibitionExclusionRegisterDeleteOrganizationSettingParams): ProhibitionExclusionRegisterDeleteOrganizationSetting$Params {
    if (!params) {
      return {} as ProhibitionExclusionRegisterDeleteOrganizationSetting$Params;
    }
    return {
      id: params.id,
    };
  }
};
