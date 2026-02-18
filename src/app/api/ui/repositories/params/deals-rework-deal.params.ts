import { DealsReworkDeal$Params } from '../../../swagger/fn/deals/deals-rework-deal';
import { SendDealToReworkRequest } from '../../models/send-deal-to-rework-request.interface';
import { adaptApiSendDealToReworkRequestDto } from '../../adapters/toDto/api-send-deal-to-rework-request-dto.adapter';

export interface DealsReworkDealParams {
  body?: SendDealToReworkRequest;
}

export const dealsReworkDealParamsAdapter = {
  adapt(params?: DealsReworkDealParams): DealsReworkDeal$Params {
    if (!params) {
      return {} as DealsReworkDeal$Params;
    }
    return {
      body: adaptApiSendDealToReworkRequestDto(params.body),
    };
  }
};
