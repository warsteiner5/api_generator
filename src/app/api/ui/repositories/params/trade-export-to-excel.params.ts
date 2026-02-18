import { ExportTradesFilterAlt } from '../../models/export-trades-filter-alt.interface';
import { TradeExportToExcel$Params } from '../../../swagger/fn/trade/trade-export-to-excel';
import { adaptApiExportTradesFilterAltDto } from '../../adapters/toDto/api-export-trades-filter.adapter';

export interface TradeExportToExcelParams {
  body?: ExportTradesFilterAlt;
}

export const tradeExportToExcelParamsAdapter = {
  adapt(params?: TradeExportToExcelParams): TradeExportToExcel$Params {
    if (!params) {
      return {} as TradeExportToExcel$Params;
    }
    return {
      body: adaptApiExportTradesFilterAltDto(params.body),
    };
  }
};
