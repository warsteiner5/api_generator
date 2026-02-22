import { OffersExportPriceListToExcel$Params } from '../../../swagger/fn/offers/offers-export-price-list-to-excel';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface OffersExportPriceListToExcelParams {
  body?: SearchObjectAlt;
}

export function offersExportPriceListToExcelAdapter(params?: OffersExportPriceListToExcelParams): OffersExportPriceListToExcel$Params {
  if (!params) {
    return {} as OffersExportPriceListToExcel$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
