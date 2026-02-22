import { DealSigningExpiredMessageParametersAlt } from '../../models/deal-signing-expired-message-parameters-alt.interface';
import { TradesAddDealSigningExpiredMessage$Params } from '../../../swagger/fn/trades/trades-add-deal-signing-expired-message';
import { apiDealSigningExpiredMessageParametersAltDtoAdapter } from '../../adapters/models/api-deal-signing-expired-message-parameters.adapter';

// @ts-ignore
export interface TradesAddDealSigningExpiredMessageParams {
  body?: DealSigningExpiredMessageParametersAlt;
}

export function tradesAddDealSigningExpiredMessageAdapter(params?: TradesAddDealSigningExpiredMessageParams): TradesAddDealSigningExpiredMessage$Params {
  if (!params) {
    return {} as TradesAddDealSigningExpiredMessage$Params;
  }
  return {
      body: apiDealSigningExpiredMessageParametersAltDtoAdapter(params.body),
  };
}
