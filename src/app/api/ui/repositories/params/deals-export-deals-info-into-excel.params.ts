import { DealsExportDealsInfoIntoExcel$Params } from '../../../swagger/fn/deals/deals-export-deals-info-into-excel';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface DealsExportDealsInfoIntoExcelParams {
  body?: SearchObjectAlt;
}

export function dealsExportDealsInfoIntoExcelAdapter(params?: DealsExportDealsInfoIntoExcelParams): DealsExportDealsInfoIntoExcel$Params {
  if (!params) {
    return {} as DealsExportDealsInfoIntoExcel$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
