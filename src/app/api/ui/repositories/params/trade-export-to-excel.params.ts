import { ExportTradesFilterAlt } from '../../models/export-trades-filter-alt.interface';
import { TradeExportToExcel$Params } from '../../../swagger/fn/trade/trade-export-to-excel';
import { apiExportTradesFilterAltDtoAdapter } from '../../adapters/models/api-export-trades-filter.adapter';

// @ts-ignore
export interface TradeExportToExcelParams {
  body?: ExportTradesFilterAlt;
}

export function tradeExportToExcelAdapter(params?: TradeExportToExcelParams): TradeExportToExcel$Params {
  if (!params) {
    return {} as TradeExportToExcel$Params;
  }
  return {
      body: apiExportTradesFilterAltDtoAdapter(params.body),
  };
}
