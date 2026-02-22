import { TradesGetArchiveDocuments$Params } from '../../../swagger/fn/trades/trades-get-archive-documents';

// @ts-ignore
export interface TradesGetArchiveDocumentsParams {
  applicationId: number;
}

export function tradesGetArchiveDocumentsAdapter(params?: TradesGetArchiveDocumentsParams): TradesGetArchiveDocuments$Params {
  if (!params) {
    return {} as TradesGetArchiveDocuments$Params;
  }
  return {
      applicationId: params.applicationId,
  };
}
