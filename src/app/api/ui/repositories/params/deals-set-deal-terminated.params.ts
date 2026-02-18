import { DealsSetDealTerminated$Params } from '../../../swagger/fn/deals/deals-set-deal-terminated';
import { DealTerminateModelAlt } from '../../models/deal-terminate-model-alt.interface';
import { adaptApiDealTerminateModelAltDto } from '../../adapters/toDto/api-deal-terminate-model.adapter';

export interface DealsSetDealTerminatedParams {
  dealId: number;
  body?: DealTerminateModelAlt;
}

export const dealsSetDealTerminatedParamsAdapter = {
  adapt(params?: DealsSetDealTerminatedParams): DealsSetDealTerminated$Params {
    if (!params) {
      return {} as DealsSetDealTerminated$Params;
    }
    return {
      dealId: params.dealId,
      body: adaptApiDealTerminateModelAltDto(params.body),
    };
  }
};
