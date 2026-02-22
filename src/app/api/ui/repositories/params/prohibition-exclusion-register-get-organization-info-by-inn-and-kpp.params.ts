import { ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKpp$Params } from '../../../swagger/fn/prohibition-exclusion-register/prohibition-exclusion-register-get-organization-info-by-inn-and-kpp';

// @ts-ignore
export interface ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKppParams {
  inn: string;
  kpp: string;
}

export function prohibitionExclusionRegisterGetOrganizationInfoByInnAndKppAdapter(params?: ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKppParams): ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKpp$Params {
  if (!params) {
    return {} as ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKpp$Params;
  }
  return {
      inn: params.inn,
      kpp: params.kpp,
  };
}
