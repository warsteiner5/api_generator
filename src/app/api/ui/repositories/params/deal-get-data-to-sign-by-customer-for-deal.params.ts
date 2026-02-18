import { DealGetDataToSignByCustomerForDeal$Params } from '../../../swagger/fn/deal/deal-get-data-to-sign-by-customer-for-deal';
import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { adaptApiDealInfoRequestDto } from '../../adapters/toDto/api-deal-info-request-dto.adapter';

export interface DealGetDataToSignByCustomerForDealParams {
  body?: DealInfoRequest;
}

export const dealGetDataToSignByCustomerForDealParamsAdapter = {
  adapt(params?: DealGetDataToSignByCustomerForDealParams): DealGetDataToSignByCustomerForDeal$Params {
    if (!params) {
      return {} as DealGetDataToSignByCustomerForDeal$Params;
    }
    return {
      body: adaptApiDealInfoRequestDto(params.body),
    };
  }
};
