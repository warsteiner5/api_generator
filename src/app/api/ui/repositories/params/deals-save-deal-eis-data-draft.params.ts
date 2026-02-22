import { DealsSaveDealEisDataDraft$Params } from '../../../swagger/fn/deals/deals-save-deal-eis-data-draft';
import { EisIntegrationSendDeal } from '../../models/eis-integration-send-deal.interface';
import { apiEisIntegrationSendDealDtoAdapter } from '../../adapters/models/api-eis-integration-send-deal-dto.adapter';

// @ts-ignore
export interface DealsSaveDealEisDataDraftParams {
  body?: EisIntegrationSendDeal;
}

export function dealsSaveDealEisDataDraftAdapter(params?: DealsSaveDealEisDataDraftParams): DealsSaveDealEisDataDraft$Params {
  if (!params) {
    return {} as DealsSaveDealEisDataDraft$Params;
  }
  return {
      body: apiEisIntegrationSendDealDtoAdapter(params.body),
  };
}
