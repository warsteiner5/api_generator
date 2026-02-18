import { DealsExportDealsInfoIntoExcel$Params } from '../../../swagger/fn/deals/deals-export-deals-info-into-excel';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface DealsExportDealsInfoIntoExcelParams {
  body?: SearchObjectAlt;
}

export const dealsExportDealsInfoIntoExcelParamsAdapter = {
  adapt(params?: DealsExportDealsInfoIntoExcelParams): DealsExportDealsInfoIntoExcel$Params {
    if (!params) {
      return {} as DealsExportDealsInfoIntoExcel$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
