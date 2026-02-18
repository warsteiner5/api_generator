import { TradesGetApplicationProductsImportTemplate$Params } from '../../../swagger/fn/trades/trades-get-application-products-import-template';

export interface TradesGetApplicationProductsImportTemplateParams {
  tradeId: number;
}

export const tradesGetApplicationProductsImportTemplateParamsAdapter = {
  adapt(params?: TradesGetApplicationProductsImportTemplateParams): TradesGetApplicationProductsImportTemplate$Params {
    if (!params) {
      return {} as TradesGetApplicationProductsImportTemplate$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
