import { CompanyCatalogGetIndustry$Params } from '../../../swagger/fn/company-catalog/company-catalog-get-industry';

// @ts-ignore
export interface CompanyCatalogGetIndustryParams {
  id: string;
}

export function companyCatalogGetIndustryAdapter(params?: CompanyCatalogGetIndustryParams): CompanyCatalogGetIndustry$Params {
  if (!params) {
    return {} as CompanyCatalogGetIndustry$Params;
  }
  return {
      id: params.id,
  };
}
