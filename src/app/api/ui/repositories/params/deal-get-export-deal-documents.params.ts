import { DealGetExportDealDocuments$Params } from '../../../swagger/fn/deal/deal-get-export-deal-documents';

export interface DealGetExportDealDocumentsParams {
  body?: number;
}

export const dealGetExportDealDocumentsParamsAdapter = {
  adapt(params?: DealGetExportDealDocumentsParams): DealGetExportDealDocuments$Params {
    if (!params) {
      return {} as DealGetExportDealDocuments$Params;
    }
    return {
      body: params.body,
    };
  }
};
