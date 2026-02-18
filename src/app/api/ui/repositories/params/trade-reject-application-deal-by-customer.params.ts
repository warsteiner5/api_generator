import { RejectApplicationDealRequestAlt } from '../../models/reject-application-deal-request-alt.interface';
import { TradeRejectApplicationDealByCustomer$Params } from '../../../swagger/fn/trade/trade-reject-application-deal-by-customer';
import { adaptApiRejectApplicationDealRequestAltDto } from '../../adapters/toDto/api-reject-application-deal-request.adapter';

export interface TradeRejectApplicationDealByCustomerParams {
  body?: RejectApplicationDealRequestAlt;
}

export const tradeRejectApplicationDealByCustomerParamsAdapter = {
  adapt(params?: TradeRejectApplicationDealByCustomerParams): TradeRejectApplicationDealByCustomer$Params {
    if (!params) {
      return {} as TradeRejectApplicationDealByCustomer$Params;
    }
    return {
      body: adaptApiRejectApplicationDealRequestAltDto(params.body),
    };
  }
};
