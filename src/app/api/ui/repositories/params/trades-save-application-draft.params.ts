import { ApplicationDto2 } from '../../models/application-dto-2.interface';
import { TradesSaveApplicationDraft$Params } from '../../../swagger/fn/trades/trades-save-application-draft';
import { apiApplicationDto2Adapter } from '../../adapters/models/api-application-dto-2.adapter';

// @ts-ignore
export interface TradesSaveApplicationDraftParams {
  body?: ApplicationDto2;
}

export function tradesSaveApplicationDraftAdapter(params?: TradesSaveApplicationDraftParams): TradesSaveApplicationDraft$Params {
  if (!params) {
    return {} as TradesSaveApplicationDraft$Params;
  }
  return {
      body: apiApplicationDto2Adapter(params.body),
  };
}
