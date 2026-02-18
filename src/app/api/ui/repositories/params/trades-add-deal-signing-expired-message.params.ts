import { DealSigningExpiredMessageParametersAlt } from '../../models/deal-signing-expired-message-parameters-alt.interface';
import { TradesAddDealSigningExpiredMessage$Params } from '../../../swagger/fn/trades/trades-add-deal-signing-expired-message';
import { adaptApiDealSigningExpiredMessageParametersAltDto } from '../../adapters/toDto/api-deal-signing-expired-message-parameters.adapter';

export interface TradesAddDealSigningExpiredMessageParams {
  body?: DealSigningExpiredMessageParametersAlt;
}

export const tradesAddDealSigningExpiredMessageParamsAdapter = {
  adapt(params?: TradesAddDealSigningExpiredMessageParams): TradesAddDealSigningExpiredMessage$Params {
    if (!params) {
      return {} as TradesAddDealSigningExpiredMessage$Params;
    }
    return {
      body: adaptApiDealSigningExpiredMessageParametersAltDto(params.body),
    };
  }
};
