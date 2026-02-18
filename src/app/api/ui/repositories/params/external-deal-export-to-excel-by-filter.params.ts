import { ExternalDealExportToExcelByFilter$Params } from '../../../swagger/fn/external-deal/external-deal-export-to-excel-by-filter';
import { ExternalDealFilterObjectAlt } from '../../models/external-deal-filter-object-alt.interface';
import { adaptApiExternalDealFilterObjectAltDto } from '../../adapters/toDto/api-external-deal-filter-object.adapter';

export interface ExternalDealExportToExcelByFilterParams {
  body?: ExternalDealFilterObjectAlt;
}

export const externalDealExportToExcelByFilterParamsAdapter = {
  adapt(params?: ExternalDealExportToExcelByFilterParams): ExternalDealExportToExcelByFilter$Params {
    if (!params) {
      return {} as ExternalDealExportToExcelByFilter$Params;
    }
    return {
      body: adaptApiExternalDealFilterObjectAltDto(params.body),
    };
  }
};
