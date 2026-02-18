import { CompanyCatalogGetIndustry$Params } from '../../../swagger/fn/company-catalog/company-catalog-get-industry';

export interface CompanyCatalogGetIndustryParams {
  id: string;
}

export const companyCatalogGetIndustryParamsAdapter = {
  adapt(params?: CompanyCatalogGetIndustryParams): CompanyCatalogGetIndustry$Params {
    if (!params) {
      return {} as CompanyCatalogGetIndustry$Params;
    }
    return {
      id: params.id,
    };
  }
};
