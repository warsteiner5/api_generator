import { CompanyCatalogSearchFavoriteCompanies$Params } from '../../../swagger/fn/company-catalog/company-catalog-search-favorite-companies';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface CompanyCatalogSearchFavoriteCompaniesParams {
  body?: SearchObjectAlt;
}

export function companyCatalogSearchFavoriteCompaniesAdapter(params?: CompanyCatalogSearchFavoriteCompaniesParams): CompanyCatalogSearchFavoriteCompanies$Params {
  if (!params) {
    return {} as CompanyCatalogSearchFavoriteCompanies$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
