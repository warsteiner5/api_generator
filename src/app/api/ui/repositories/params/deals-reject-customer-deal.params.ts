import { DealsRejectCustomerDeal$Params } from '../../../swagger/fn/deals/deals-reject-customer-deal';
import { DifferenceDealProtocolAlt } from '../../models/difference-deal-protocol-alt.interface';
import { adaptApiDifferenceDealProtocolAltDto } from '../../adapters/toDto/api-difference-deal-protocol.adapter';

export interface DealsRejectCustomerDealParams {
  body?: DifferenceDealProtocolAlt;
}

export const dealsRejectCustomerDealParamsAdapter = {
  adapt(params?: DealsRejectCustomerDealParams): DealsRejectCustomerDeal$Params {
    if (!params) {
      return {} as DealsRejectCustomerDeal$Params;
    }
    return {
      body: adaptApiDifferenceDealProtocolAltDto(params.body),
    };
  }
};
