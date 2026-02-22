import { CompanyCatalogGetIndustryGroups$Params } from '../../../swagger/fn/company-catalog/company-catalog-get-industry-groups';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface CompanyCatalogGetIndustryGroupsParams {
  body?: SearchObjectAlt;
}

export function companyCatalogGetIndustryGroupsAdapter(params?: CompanyCatalogGetIndustryGroupsParams): CompanyCatalogGetIndustryGroups$Params {
  if (!params) {
    return {} as CompanyCatalogGetIndustryGroups$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
