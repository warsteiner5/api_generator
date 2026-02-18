import { DealsSaveDealEisDataDraft$Params } from '../../../swagger/fn/deals/deals-save-deal-eis-data-draft';
import { EisIntegrationSendDeal } from '../../models/eis-integration-send-deal.interface';
import { adaptApiEisIntegrationSendDealDto } from '../../adapters/toDto/api-eis-integration-send-deal-dto.adapter';

export interface DealsSaveDealEisDataDraftParams {
  body?: EisIntegrationSendDeal;
}

export const dealsSaveDealEisDataDraftParamsAdapter = {
  adapt(params?: DealsSaveDealEisDataDraftParams): DealsSaveDealEisDataDraft$Params {
    if (!params) {
      return {} as DealsSaveDealEisDataDraft$Params;
    }
    return {
      body: adaptApiEisIntegrationSendDealDto(params.body),
    };
  }
};
