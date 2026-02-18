import { TradesRemoveApplicationDraft$Params } from '../../../swagger/fn/trades/trades-remove-application-draft';

export interface TradesRemoveApplicationDraftParams {
  applicationId: number;
}

export const tradesRemoveApplicationDraftParamsAdapter = {
  adapt(params?: TradesRemoveApplicationDraftParams): TradesRemoveApplicationDraft$Params {
    if (!params) {
      return {} as TradesRemoveApplicationDraft$Params;
    }
    return {
      applicationId: params.applicationId,
    };
  }
};
