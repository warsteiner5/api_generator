import { DealInfoForCancellationAlt } from '../../models/deal-info-for-cancellation-alt.interface';
import { DealsCancelDeal$Params } from '../../../swagger/fn/deals/deals-cancel-deal';
import { adaptApiDealInfoForCancellationAltDto } from '../../adapters/toDto/api-deal-info-for-cancellation.adapter';

export interface DealsCancelDealParams {
  body?: DealInfoForCancellationAlt;
}

export const dealsCancelDealParamsAdapter = {
  adapt(params?: DealsCancelDealParams): DealsCancelDeal$Params {
    if (!params) {
      return {} as DealsCancelDeal$Params;
    }
    return {
      body: adaptApiDealInfoForCancellationAltDto(params.body),
    };
  }
};
