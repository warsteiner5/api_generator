import { DealsGetExportDealDocuments$Params } from '../../../swagger/fn/deals/deals-get-export-deal-documents';

// @ts-ignore
export interface DealsGetExportDealDocumentsParams {
  id: number;
  tradeId: number;
}

export function dealsGetExportDealDocumentsAdapter(params?: DealsGetExportDealDocumentsParams): DealsGetExportDealDocuments$Params {
  if (!params) {
    return {} as DealsGetExportDealDocuments$Params;
  }
  return {
      id: params.id,
      tradeId: params.tradeId,
  };
}
