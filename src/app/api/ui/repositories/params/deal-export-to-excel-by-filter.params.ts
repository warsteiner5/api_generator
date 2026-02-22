import { DealExportToExcelByFilter$Params } from '../../../swagger/fn/deal/deal-export-to-excel-by-filter';
import { DealFilterObjectAlt } from '../../models/deal-filter-object-alt.interface';
import { apiDealFilterObjectAltDtoAdapter } from '../../adapters/models/api-deal-filter-object.adapter';

// @ts-ignore
export interface DealExportToExcelByFilterParams {
  body?: DealFilterObjectAlt;
}

export function dealExportToExcelByFilterAdapter(params?: DealExportToExcelByFilterParams): DealExportToExcelByFilter$Params {
  if (!params) {
    return {} as DealExportToExcelByFilter$Params;
  }
  return {
      body: apiDealFilterObjectAltDtoAdapter(params.body),
  };
}
