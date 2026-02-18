import { ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKpp$Params } from '../../../swagger/fn/prohibition-exclusion-register/prohibition-exclusion-register-get-organization-info-by-inn-and-kpp';

export interface ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKppParams {
  inn: string;
  kpp: string;
}

export const prohibitionExclusionRegisterGetOrganizationInfoByInnAndKppParamsAdapter = {
  adapt(params?: ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKppParams): ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKpp$Params {
    if (!params) {
      return {} as ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKpp$Params;
    }
    return {
      inn: params.inn,
      kpp: params.kpp,
    };
  }
};
