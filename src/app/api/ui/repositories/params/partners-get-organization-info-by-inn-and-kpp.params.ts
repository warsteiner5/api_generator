import { PartnersGetOrganizationInfoByInnAndKpp$Params } from '../../../swagger/fn/partners/partners-get-organization-info-by-inn-and-kpp';

export interface PartnersGetOrganizationInfoByInnAndKppParams {
  inn: string;
  kpp?: string;
}

export const partnersGetOrganizationInfoByInnAndKppParamsAdapter = {
  adapt(params?: PartnersGetOrganizationInfoByInnAndKppParams): PartnersGetOrganizationInfoByInnAndKpp$Params {
    if (!params) {
      return {} as PartnersGetOrganizationInfoByInnAndKpp$Params;
    }
    return {
      inn: params.inn,
      kpp: params.kpp,
    };
  }
};
