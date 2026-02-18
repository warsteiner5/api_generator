import { ApplicationRetradingUpdate } from '../../models/application-retrading-update.interface';
import { TradesRetradingUpdate$Params } from '../../../swagger/fn/trades/trades-retrading-update';
import { adaptApiApplicationRetradingUpdateDto } from '../../adapters/toDto/api-application-retrading-update-dto.adapter';

export interface TradesRetradingUpdateParams {
  body?: ApplicationRetradingUpdate;
}

export const tradesRetradingUpdateParamsAdapter = {
  adapt(params?: TradesRetradingUpdateParams): TradesRetradingUpdate$Params {
    if (!params) {
      return {} as TradesRetradingUpdate$Params;
    }
    return {
      body: adaptApiApplicationRetradingUpdateDto(params.body),
    };
  }
};
