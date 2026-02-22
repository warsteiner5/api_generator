import { DealsSendDealToEis$Params } from '../../../swagger/fn/deals/deals-send-deal-to-eis';
import { EisIntegrationSendDeal } from '../../models/eis-integration-send-deal.interface';
import { apiEisIntegrationSendDealDtoAdapter } from '../../adapters/models/api-eis-integration-send-deal-dto.adapter';

// @ts-ignore
export interface DealsSendDealToEisParams {
  body?: EisIntegrationSendDeal;
}

export function dealsSendDealToEisAdapter(params?: DealsSendDealToEisParams): DealsSendDealToEis$Params {
  if (!params) {
    return {} as DealsSendDealToEis$Params;
  }
  return {
      body: apiEisIntegrationSendDealDtoAdapter(params.body),
  };
}
