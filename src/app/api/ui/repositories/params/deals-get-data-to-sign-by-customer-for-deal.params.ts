import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { DealsGetDataToSignByCustomerForDeal$Params } from '../../../swagger/fn/deals/deals-get-data-to-sign-by-customer-for-deal';
import { apiDealInfoRequestDtoAdapter } from '../../adapters/models/api-deal-info-request-dto.adapter';

// @ts-ignore
export interface DealsGetDataToSignByCustomerForDealParams {
  body?: DealInfoRequest;
}

export function dealsGetDataToSignByCustomerForDealAdapter(params?: DealsGetDataToSignByCustomerForDealParams): DealsGetDataToSignByCustomerForDeal$Params {
  if (!params) {
    return {} as DealsGetDataToSignByCustomerForDeal$Params;
  }
  return {
      body: apiDealInfoRequestDtoAdapter(params.body),
  };
}
