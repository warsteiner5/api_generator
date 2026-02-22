import { DealGetDataToSignByCustomerForDeal$Params } from '../../../swagger/fn/deal/deal-get-data-to-sign-by-customer-for-deal';
import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { apiDealInfoRequestDtoAdapter } from '../../adapters/models/api-deal-info-request-dto.adapter';

// @ts-ignore
export interface DealGetDataToSignByCustomerForDealParams {
  body?: DealInfoRequest;
}

export function dealGetDataToSignByCustomerForDealAdapter(params?: DealGetDataToSignByCustomerForDealParams): DealGetDataToSignByCustomerForDeal$Params {
  if (!params) {
    return {} as DealGetDataToSignByCustomerForDeal$Params;
  }
  return {
      body: apiDealInfoRequestDtoAdapter(params.body),
  };
}
