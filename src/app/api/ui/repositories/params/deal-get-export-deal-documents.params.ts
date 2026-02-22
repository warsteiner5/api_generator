import { DealGetExportDealDocuments$Params } from '../../../swagger/fn/deal/deal-get-export-deal-documents';

// @ts-ignore
export interface DealGetExportDealDocumentsParams {
  body?: number;
}

export function dealGetExportDealDocumentsAdapter(params?: DealGetExportDealDocumentsParams): DealGetExportDealDocuments$Params {
  if (!params) {
    return {} as DealGetExportDealDocuments$Params;
  }
  return {
      body: params.body,
  };
}
