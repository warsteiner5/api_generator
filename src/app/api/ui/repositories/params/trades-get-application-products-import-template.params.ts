import { TradesGetApplicationProductsImportTemplate$Params } from '../../../swagger/fn/trades/trades-get-application-products-import-template';

// @ts-ignore
export interface TradesGetApplicationProductsImportTemplateParams {
  tradeId: number;
}

export function tradesGetApplicationProductsImportTemplateAdapter(params?: TradesGetApplicationProductsImportTemplateParams): TradesGetApplicationProductsImportTemplate$Params {
  if (!params) {
    return {} as TradesGetApplicationProductsImportTemplate$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
