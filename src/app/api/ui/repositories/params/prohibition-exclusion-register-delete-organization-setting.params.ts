import { ProhibitionExclusionRegisterDeleteOrganizationSetting$Params } from '../../../swagger/fn/prohibition-exclusion-register/prohibition-exclusion-register-delete-organization-setting';

// @ts-ignore
export interface ProhibitionExclusionRegisterDeleteOrganizationSettingParams {
  id: number;
}

export function prohibitionExclusionRegisterDeleteOrganizationSettingAdapter(params?: ProhibitionExclusionRegisterDeleteOrganizationSettingParams): ProhibitionExclusionRegisterDeleteOrganizationSetting$Params {
  if (!params) {
    return {} as ProhibitionExclusionRegisterDeleteOrganizationSetting$Params;
  }
  return {
      id: params.id,
  };
}
