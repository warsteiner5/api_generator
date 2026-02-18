import { CompanyCatalogGetIndustryGroups$Params } from '../../../swagger/fn/company-catalog/company-catalog-get-industry-groups';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface CompanyCatalogGetIndustryGroupsParams {
  body?: SearchObjectAlt;
}

export const companyCatalogGetIndustryGroupsParamsAdapter = {
  adapt(params?: CompanyCatalogGetIndustryGroupsParams): CompanyCatalogGetIndustryGroups$Params {
    if (!params) {
      return {} as CompanyCatalogGetIndustryGroups$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
