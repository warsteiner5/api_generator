import { ImportExcelLotItemRequestAlt } from '../../models/import-excel-lot-item-request-alt.interface';
import { TradeImportLotItemsFromExcel$Params } from '../../../swagger/fn/trade/trade-import-lot-items-from-excel';
import { adaptApiImportExcelLotItemRequestAltDto } from '../../adapters/toDto/api-import-excel-lot-item-request.adapter';

export interface TradeImportLotItemsFromExcelParams {
  body?: ImportExcelLotItemRequestAlt;
}

export const tradeImportLotItemsFromExcelParamsAdapter = {
  adapt(params?: TradeImportLotItemsFromExcelParams): TradeImportLotItemsFromExcel$Params {
    if (!params) {
      return {} as TradeImportLotItemsFromExcel$Params;
    }
    return {
      body: adaptApiImportExcelLotItemRequestAltDto(params.body),
    };
  }
};
