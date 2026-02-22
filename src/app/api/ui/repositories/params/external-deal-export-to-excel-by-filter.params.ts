import { ExternalDealExportToExcelByFilter$Params } from '../../../swagger/fn/external-deal/external-deal-export-to-excel-by-filter';
import { ExternalDealFilterObjectAlt } from '../../models/external-deal-filter-object-alt.interface';
import { apiExternalDealFilterObjectAltDtoAdapter } from '../../adapters/models/api-external-deal-filter-object.adapter';

// @ts-ignore
export interface ExternalDealExportToExcelByFilterParams {
  body?: ExternalDealFilterObjectAlt;
}

export function externalDealExportToExcelByFilterAdapter(params?: ExternalDealExportToExcelByFilterParams): ExternalDealExportToExcelByFilter$Params {
  if (!params) {
    return {} as ExternalDealExportToExcelByFilter$Params;
  }
  return {
      body: apiExternalDealFilterObjectAltDtoAdapter(params.body),
  };
}
