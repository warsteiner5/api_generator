import { DealCancelDealExternal$Params } from '../../../swagger/fn/deal/deal-cancel-deal-external';
import { DealInfoForCancellationAlt } from '../../models/deal-info-for-cancellation-alt.interface';
import { adaptApiDealInfoForCancellationAltDto } from '../../adapters/toDto/api-deal-info-for-cancellation.adapter';

export interface DealCancelDealExternalParams {
  body?: DealInfoForCancellationAlt;
}

export const dealCancelDealExternalParamsAdapter = {
  adapt(params?: DealCancelDealExternalParams): DealCancelDealExternal$Params {
    if (!params) {
      return {} as DealCancelDealExternal$Params;
    }
    return {
      body: adaptApiDealInfoForCancellationAltDto(params.body),
    };
  }
};
