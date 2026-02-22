import { DealExtendedInfoAlt } from '../../models/deal-extended-info-alt.interface';
import { DealsSaveDealExtendedInfo$Params } from '../../../swagger/fn/deals/deals-save-deal-extended-info';
import { apiDealExtendedInfoAltDtoAdapter } from '../../adapters/models/api-deal-extended-info.adapter';

// @ts-ignore
export interface DealsSaveDealExtendedInfoParams {
  body?: DealExtendedInfoAlt;
}

export function dealsSaveDealExtendedInfoAdapter(params?: DealsSaveDealExtendedInfoParams): DealsSaveDealExtendedInfo$Params {
  if (!params) {
    return {} as DealsSaveDealExtendedInfo$Params;
  }
  return {
      body: apiDealExtendedInfoAltDtoAdapter(params.body),
  };
}
