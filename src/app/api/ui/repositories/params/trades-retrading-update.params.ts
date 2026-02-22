import { ApplicationRetradingUpdate } from '../../models/application-retrading-update.interface';
import { TradesRetradingUpdate$Params } from '../../../swagger/fn/trades/trades-retrading-update';
import { apiApplicationRetradingUpdateDtoAdapter } from '../../adapters/models/api-application-retrading-update-dto.adapter';

// @ts-ignore
export interface TradesRetradingUpdateParams {
  body?: ApplicationRetradingUpdate;
}

export function tradesRetradingUpdateAdapter(params?: TradesRetradingUpdateParams): TradesRetradingUpdate$Params {
  if (!params) {
    return {} as TradesRetradingUpdate$Params;
  }
  return {
      body: apiApplicationRetradingUpdateDtoAdapter(params.body),
  };
}
