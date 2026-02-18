import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { DealsGetDataToSignByCustomerForDeal$Params } from '../../../swagger/fn/deals/deals-get-data-to-sign-by-customer-for-deal';
import { adaptApiDealInfoRequestDto } from '../../adapters/toDto/api-deal-info-request-dto.adapter';

export interface DealsGetDataToSignByCustomerForDealParams {
  body?: DealInfoRequest;
}

export const dealsGetDataToSignByCustomerForDealParamsAdapter = {
  adapt(params?: DealsGetDataToSignByCustomerForDealParams): DealsGetDataToSignByCustomerForDeal$Params {
    if (!params) {
      return {} as DealsGetDataToSignByCustomerForDeal$Params;
    }
    return {
      body: adaptApiDealInfoRequestDto(params.body),
    };
  }
};
