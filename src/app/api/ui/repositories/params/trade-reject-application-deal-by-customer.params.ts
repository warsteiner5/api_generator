import { RejectApplicationDealRequestAlt } from '../../models/reject-application-deal-request-alt.interface';
import { TradeRejectApplicationDealByCustomer$Params } from '../../../swagger/fn/trade/trade-reject-application-deal-by-customer';
import { apiRejectApplicationDealRequestAltDtoAdapter } from '../../adapters/models/api-reject-application-deal-request.adapter';

// @ts-ignore
export interface TradeRejectApplicationDealByCustomerParams {
  body?: RejectApplicationDealRequestAlt;
}

export function tradeRejectApplicationDealByCustomerAdapter(params?: TradeRejectApplicationDealByCustomerParams): TradeRejectApplicationDealByCustomer$Params {
  if (!params) {
    return {} as TradeRejectApplicationDealByCustomer$Params;
  }
  return {
      body: apiRejectApplicationDealRequestAltDtoAdapter(params.body),
  };
}
