import { DealsReworkDeal$Params } from '../../../swagger/fn/deals/deals-rework-deal';
import { SendDealToReworkRequest } from '../../models/send-deal-to-rework-request.interface';
import { apiSendDealToReworkRequestDtoAdapter } from '../../adapters/models/api-send-deal-to-rework-request-dto.adapter';

// @ts-ignore
export interface DealsReworkDealParams {
  body?: SendDealToReworkRequest;
}

export function dealsReworkDealAdapter(params?: DealsReworkDealParams): DealsReworkDeal$Params {
  if (!params) {
    return {} as DealsReworkDeal$Params;
  }
  return {
      body: apiSendDealToReworkRequestDtoAdapter(params.body),
  };
}
