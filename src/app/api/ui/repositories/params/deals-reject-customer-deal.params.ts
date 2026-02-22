import { DealsRejectCustomerDeal$Params } from '../../../swagger/fn/deals/deals-reject-customer-deal';
import { DifferenceDealProtocolAlt } from '../../models/difference-deal-protocol-alt.interface';
import { apiDifferenceDealProtocolAltDtoAdapter } from '../../adapters/models/api-difference-deal-protocol.adapter';

// @ts-ignore
export interface DealsRejectCustomerDealParams {
  body?: DifferenceDealProtocolAlt;
}

export function dealsRejectCustomerDealAdapter(params?: DealsRejectCustomerDealParams): DealsRejectCustomerDeal$Params {
  if (!params) {
    return {} as DealsRejectCustomerDeal$Params;
  }
  return {
      body: apiDifferenceDealProtocolAltDtoAdapter(params.body),
  };
}
