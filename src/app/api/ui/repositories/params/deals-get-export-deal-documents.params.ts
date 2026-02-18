import { DealsGetExportDealDocuments$Params } from '../../../swagger/fn/deals/deals-get-export-deal-documents';

export interface DealsGetExportDealDocumentsParams {
  id: number;
  tradeId: number;
}

export const dealsGetExportDealDocumentsParamsAdapter = {
  adapt(params?: DealsGetExportDealDocumentsParams): DealsGetExportDealDocuments$Params {
    if (!params) {
      return {} as DealsGetExportDealDocuments$Params;
    }
    return {
      id: params.id,
      tradeId: params.tradeId,
    };
  }
};
