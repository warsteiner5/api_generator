import { DealInfoForCancellationAlt } from '../../models/deal-info-for-cancellation-alt.interface';
import { DealsCancelExternalDeal$Params } from '../../../swagger/fn/deals/deals-cancel-external-deal';
import { adaptApiDealInfoForCancellationAltDto } from '../../adapters/toDto/api-deal-info-for-cancellation.adapter';

export interface DealsCancelExternalDealParams {
  dealId: number;
  organizationId: number;
  userId: number;
  body?: DealInfoForCancellationAlt;
}

export const dealsCancelExternalDealParamsAdapter = {
  adapt(params?: DealsCancelExternalDealParams): DealsCancelExternalDeal$Params {
    if (!params) {
      return {} as DealsCancelExternalDeal$Params;
    }
    return {
      dealId: params.dealId,
      organizationId: params.organizationId,
      userId: params.userId,
      body: adaptApiDealInfoForCancellationAltDto(params.body),
    };
  }
};
