import { CompanyCatalogSearchCompanies$Params } from '../../../swagger/fn/company-catalog/company-catalog-search-companies';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface CompanyCatalogSearchCompaniesParams {
  body?: SearchObjectAlt;
}

export const companyCatalogSearchCompaniesParamsAdapter = {
  adapt(params?: CompanyCatalogSearchCompaniesParams): CompanyCatalogSearchCompanies$Params {
    if (!params) {
      return {} as CompanyCatalogSearchCompanies$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
