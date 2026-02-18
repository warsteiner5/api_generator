import { DealCancelDeal$Params } from '../../../swagger/fn/deal/deal-cancel-deal';
import { DealInfoForCancellationAlt } from '../../models/deal-info-for-cancellation-alt.interface';
import { adaptApiDealInfoForCancellationAltDto } from '../../adapters/toDto/api-deal-info-for-cancellation.adapter';

export interface DealCancelDealParams {
  body?: DealInfoForCancellationAlt;
}

export const dealCancelDealParamsAdapter = {
  adapt(params?: DealCancelDealParams): DealCancelDeal$Params {
    if (!params) {
      return {} as DealCancelDeal$Params;
    }
    return {
      body: adaptApiDealInfoForCancellationAltDto(params.body),
    };
  }
};
