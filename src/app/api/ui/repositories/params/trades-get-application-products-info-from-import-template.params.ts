import { TradesGetApplicationProductsInfoFromImportTemplate$Params } from '../../../swagger/fn/trades/trades-get-application-products-info-from-import-template';

export interface TradesGetApplicationProductsInfoFromImportTemplateParams {
  tradeId: number;
  fileGuid: string;
}

export const tradesGetApplicationProductsInfoFromImportTemplateParamsAdapter = {
  adapt(params?: TradesGetApplicationProductsInfoFromImportTemplateParams): TradesGetApplicationProductsInfoFromImportTemplate$Params {
    if (!params) {
      return {} as TradesGetApplicationProductsInfoFromImportTemplate$Params;
    }
    return {
      tradeId: params.tradeId,
      fileGuid: params.fileGuid,
    };
  }
};
