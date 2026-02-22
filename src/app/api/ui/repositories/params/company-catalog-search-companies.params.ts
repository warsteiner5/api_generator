import { CompanyCatalogSearchCompanies$Params } from '../../../swagger/fn/company-catalog/company-catalog-search-companies';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface CompanyCatalogSearchCompaniesParams {
  body?: SearchObjectAlt;
}

export function companyCatalogSearchCompaniesAdapter(params?: CompanyCatalogSearchCompaniesParams): CompanyCatalogSearchCompanies$Params {
  if (!params) {
    return {} as CompanyCatalogSearchCompanies$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
