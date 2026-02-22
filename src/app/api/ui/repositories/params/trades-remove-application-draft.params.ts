import { TradesRemoveApplicationDraft$Params } from '../../../swagger/fn/trades/trades-remove-application-draft';

// @ts-ignore
export interface TradesRemoveApplicationDraftParams {
  applicationId: number;
}

export function tradesRemoveApplicationDraftAdapter(params?: TradesRemoveApplicationDraftParams): TradesRemoveApplicationDraft$Params {
  if (!params) {
    return {} as TradesRemoveApplicationDraft$Params;
  }
  return {
      applicationId: params.applicationId,
  };
}
