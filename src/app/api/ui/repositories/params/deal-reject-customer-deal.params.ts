import { DealRejectCustomerDeal$Params } from '../../../swagger/fn/deal/deal-reject-customer-deal';
import { DifferenceDealProtocolAlt } from '../../models/difference-deal-protocol-alt.interface';
import { adaptApiDifferenceDealProtocolAltDto } from '../../adapters/toDto/api-difference-deal-protocol.adapter';

export interface DealRejectCustomerDealParams {
  body?: DifferenceDealProtocolAlt;
}

export const dealRejectCustomerDealParamsAdapter = {
  adapt(params?: DealRejectCustomerDealParams): DealRejectCustomerDeal$Params {
    if (!params) {
      return {} as DealRejectCustomerDeal$Params;
    }
    return {
      body: adaptApiDifferenceDealProtocolAltDto(params.body),
    };
  }
};
