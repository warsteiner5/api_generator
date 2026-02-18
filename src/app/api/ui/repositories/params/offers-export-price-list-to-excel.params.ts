import { OffersExportPriceListToExcel$Params } from '../../../swagger/fn/offers/offers-export-price-list-to-excel';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface OffersExportPriceListToExcelParams {
  body?: SearchObjectAlt;
}

export const offersExportPriceListToExcelParamsAdapter = {
  adapt(params?: OffersExportPriceListToExcelParams): OffersExportPriceListToExcel$Params {
    if (!params) {
      return {} as OffersExportPriceListToExcel$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
