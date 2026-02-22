import { DealSetDealIdForOrdersLink$Params } from '../../../swagger/fn/deal/deal-set-deal-id-for-orders-link';
import { SetDealIdForOrdersLinkModelAlt } from '../../models/set-deal-id-for-orders-link-model-alt.interface';
import { apiSetDealIdForOrdersLinkModelAltDtoAdapter } from '../../adapters/models/api-set-deal-id-for-orders-link-model.adapter';

// @ts-ignore
export interface DealSetDealIdForOrdersLinkParams {
  body?: SetDealIdForOrdersLinkModelAlt;
}

export function dealSetDealIdForOrdersLinkAdapter(params?: DealSetDealIdForOrdersLinkParams): DealSetDealIdForOrdersLink$Params {
  if (!params) {
    return {} as DealSetDealIdForOrdersLink$Params;
  }
  return {
      body: apiSetDealIdForOrdersLinkModelAltDtoAdapter(params.body),
  };
}
