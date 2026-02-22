import { ImportExcelLotItemRequestAlt } from '../../models/import-excel-lot-item-request-alt.interface';
import { TradeImportLotItemsFromExcel$Params } from '../../../swagger/fn/trade/trade-import-lot-items-from-excel';
import { apiImportExcelLotItemRequestAltDtoAdapter } from '../../adapters/models/api-import-excel-lot-item-request.adapter';

// @ts-ignore
export interface TradeImportLotItemsFromExcelParams {
  body?: ImportExcelLotItemRequestAlt;
}

export function tradeImportLotItemsFromExcelAdapter(params?: TradeImportLotItemsFromExcelParams): TradeImportLotItemsFromExcel$Params {
  if (!params) {
    return {} as TradeImportLotItemsFromExcel$Params;
  }
  return {
      body: apiImportExcelLotItemRequestAltDtoAdapter(params.body),
  };
}
