import { TradesGetApplicationProductsInfoFromImportTemplate$Params } from '../../../swagger/fn/trades/trades-get-application-products-info-from-import-template';

// @ts-ignore
export interface TradesGetApplicationProductsInfoFromImportTemplateParams {
  tradeId: number;
  fileGuid: string;
}

export function tradesGetApplicationProductsInfoFromImportTemplateAdapter(params?: TradesGetApplicationProductsInfoFromImportTemplateParams): TradesGetApplicationProductsInfoFromImportTemplate$Params {
  if (!params) {
    return {} as TradesGetApplicationProductsInfoFromImportTemplate$Params;
  }
  return {
      tradeId: params.tradeId,
      fileGuid: params.fileGuid,
  };
}
