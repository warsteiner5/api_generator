import { TradesGetArchiveDocuments$Params } from '../../../swagger/fn/trades/trades-get-archive-documents';

export interface TradesGetArchiveDocumentsParams {
  applicationId: number;
}

export const tradesGetArchiveDocumentsParamsAdapter = {
  adapt(params?: TradesGetArchiveDocumentsParams): TradesGetArchiveDocuments$Params {
    if (!params) {
      return {} as TradesGetArchiveDocuments$Params;
    }
    return {
      applicationId: params.applicationId,
    };
  }
};
