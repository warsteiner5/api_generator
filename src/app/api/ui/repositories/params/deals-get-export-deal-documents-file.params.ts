import { DealsGetExportDealDocumentsFile$Params } from '../../../swagger/fn/deals/deals-get-export-deal-documents-file';

// @ts-ignore
export interface DealsGetExportDealDocumentsFileParams {
  id: number;
  tradeId: number;
}

export function dealsGetExportDealDocumentsFileAdapter(params?: DealsGetExportDealDocumentsFileParams): DealsGetExportDealDocumentsFile$Params {
  if (!params) {
    return {} as DealsGetExportDealDocumentsFile$Params;
  }
  return {
      id: params.id,
      tradeId: params.tradeId,
  };
}
