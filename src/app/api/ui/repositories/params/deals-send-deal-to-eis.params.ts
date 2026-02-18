import { DealsSendDealToEis$Params } from '../../../swagger/fn/deals/deals-send-deal-to-eis';
import { EisIntegrationSendDeal } from '../../models/eis-integration-send-deal.interface';
import { adaptApiEisIntegrationSendDealDto } from '../../adapters/toDto/api-eis-integration-send-deal-dto.adapter';

export interface DealsSendDealToEisParams {
  body?: EisIntegrationSendDeal;
}

export const dealsSendDealToEisParamsAdapter = {
  adapt(params?: DealsSendDealToEisParams): DealsSendDealToEis$Params {
    if (!params) {
      return {} as DealsSendDealToEis$Params;
    }
    return {
      body: adaptApiEisIntegrationSendDealDto(params.body),
    };
  }
};
