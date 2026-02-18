import { DealExtendedInfoAlt } from '../../models/deal-extended-info-alt.interface';
import { DealsSaveDealExtendedInfo$Params } from '../../../swagger/fn/deals/deals-save-deal-extended-info';
import { adaptApiDealExtendedInfoAltDto } from '../../adapters/toDto/api-deal-extended-info.adapter';

export interface DealsSaveDealExtendedInfoParams {
  body?: DealExtendedInfoAlt;
}

export const dealsSaveDealExtendedInfoParamsAdapter = {
  adapt(params?: DealsSaveDealExtendedInfoParams): DealsSaveDealExtendedInfo$Params {
    if (!params) {
      return {} as DealsSaveDealExtendedInfo$Params;
    }
    return {
      body: adaptApiDealExtendedInfoAltDto(params.body),
    };
  }
};
