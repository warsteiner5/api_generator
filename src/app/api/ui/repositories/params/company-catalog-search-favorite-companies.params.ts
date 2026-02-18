import { CompanyCatalogSearchFavoriteCompanies$Params } from '../../../swagger/fn/company-catalog/company-catalog-search-favorite-companies';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface CompanyCatalogSearchFavoriteCompaniesParams {
  body?: SearchObjectAlt;
}

export const companyCatalogSearchFavoriteCompaniesParamsAdapter = {
  adapt(params?: CompanyCatalogSearchFavoriteCompaniesParams): CompanyCatalogSearchFavoriteCompanies$Params {
    if (!params) {
      return {} as CompanyCatalogSearchFavoriteCompanies$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
