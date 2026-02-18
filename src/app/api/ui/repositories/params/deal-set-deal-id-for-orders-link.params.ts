import { DealSetDealIdForOrdersLink$Params } from '../../../swagger/fn/deal/deal-set-deal-id-for-orders-link';
import { SetDealIdForOrdersLinkModelAlt } from '../../models/set-deal-id-for-orders-link-model-alt.interface';
import { adaptApiSetDealIdForOrdersLinkModelAltDto } from '../../adapters/toDto/api-set-deal-id-for-orders-link-model.adapter';

export interface DealSetDealIdForOrdersLinkParams {
  body?: SetDealIdForOrdersLinkModelAlt;
}

export const dealSetDealIdForOrdersLinkParamsAdapter = {
  adapt(params?: DealSetDealIdForOrdersLinkParams): DealSetDealIdForOrdersLink$Params {
    if (!params) {
      return {} as DealSetDealIdForOrdersLink$Params;
    }
    return {
      body: adaptApiSetDealIdForOrdersLinkModelAltDto(params.body),
    };
  }
};
