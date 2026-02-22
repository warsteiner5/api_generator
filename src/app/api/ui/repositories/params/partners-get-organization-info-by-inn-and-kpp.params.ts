import { PartnersGetOrganizationInfoByInnAndKpp$Params } from '../../../swagger/fn/partners/partners-get-organization-info-by-inn-and-kpp';

// @ts-ignore
export interface PartnersGetOrganizationInfoByInnAndKppParams {
  inn: string;
  kpp?: string;
}

export function partnersGetOrganizationInfoByInnAndKppAdapter(params?: PartnersGetOrganizationInfoByInnAndKppParams): PartnersGetOrganizationInfoByInnAndKpp$Params {
  if (!params) {
    return {} as PartnersGetOrganizationInfoByInnAndKpp$Params;
  }
  return {
      inn: params.inn,
      kpp: params.kpp,
  };
}
