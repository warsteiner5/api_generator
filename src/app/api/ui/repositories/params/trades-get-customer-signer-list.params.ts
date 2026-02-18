import { TradesGetCustomerSignerList$Params } from '../../../swagger/fn/trades/trades-get-customer-signer-list';

export interface TradesGetCustomerSignerListParams {
}

export const tradesGetCustomerSignerListParamsAdapter = {
  adapt(params?: TradesGetCustomerSignerListParams): TradesGetCustomerSignerList$Params {
    if (!params) {
      return {} as TradesGetCustomerSignerList$Params;
    }
    return {
    };
  }
};
