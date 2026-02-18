import { ApplicationDto2 } from '../../models/application-dto-2.interface';
import { TradesSaveApplicationDraft$Params } from '../../../swagger/fn/trades/trades-save-application-draft';
import { adaptApiApplicationDto2 } from '../../adapters/toDto/api-application-dto-2.adapter';

export interface TradesSaveApplicationDraftParams {
  body?: ApplicationDto2;
}

export const tradesSaveApplicationDraftParamsAdapter = {
  adapt(params?: TradesSaveApplicationDraftParams): TradesSaveApplicationDraft$Params {
    if (!params) {
      return {} as TradesSaveApplicationDraft$Params;
    }
    return {
      body: adaptApiApplicationDto2(params.body),
    };
  }
};
