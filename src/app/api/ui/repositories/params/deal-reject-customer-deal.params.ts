import { DealRejectCustomerDeal$Params } from '../../../swagger/fn/deal/deal-reject-customer-deal';
import { DifferenceDealProtocolAlt } from '../../models/difference-deal-protocol-alt.interface';
import { apiDifferenceDealProtocolAltDtoAdapter } from '../../adapters/models/api-difference-deal-protocol.adapter';

// @ts-ignore
export interface DealRejectCustomerDealParams {
  body?: DifferenceDealProtocolAlt;
}

export function dealRejectCustomerDealAdapter(params?: DealRejectCustomerDealParams): DealRejectCustomerDeal$Params {
  if (!params) {
    return {} as DealRejectCustomerDeal$Params;
  }
  return {
      body: apiDifferenceDealProtocolAltDtoAdapter(params.body),
  };
}
