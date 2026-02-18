import { DealExportToExcelByFilter$Params } from '../../../swagger/fn/deal/deal-export-to-excel-by-filter';
import { DealFilterObjectAlt } from '../../models/deal-filter-object-alt.interface';
import { adaptApiDealFilterObjectAltDto } from '../../adapters/toDto/api-deal-filter-object.adapter';

export interface DealExportToExcelByFilterParams {
  body?: DealFilterObjectAlt;
}

export const dealExportToExcelByFilterParamsAdapter = {
  adapt(params?: DealExportToExcelByFilterParams): DealExportToExcelByFilter$Params {
    if (!params) {
      return {} as DealExportToExcelByFilter$Params;
    }
    return {
      body: adaptApiDealFilterObjectAltDto(params.body),
    };
  }
};
