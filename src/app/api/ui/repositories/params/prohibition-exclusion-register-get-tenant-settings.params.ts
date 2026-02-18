import { ProhibitionExclusionRegisterGetTenantSettings$Params } from '../../../swagger/fn/prohibition-exclusion-register/prohibition-exclusion-register-get-tenant-settings';

export interface ProhibitionExclusionRegisterGetTenantSettingsParams {
}

export const prohibitionExclusionRegisterGetTenantSettingsParamsAdapter = {
  adapt(params?: ProhibitionExclusionRegisterGetTenantSettingsParams): ProhibitionExclusionRegisterGetTenantSettings$Params {
    if (!params) {
      return {} as ProhibitionExclusionRegisterGetTenantSettings$Params;
    }
    return {
    };
  }
};
