import { DealObjectEnum } from '../../enums/deal-object.enum';
import { DealsGetDeal$Params } from '../../../swagger/fn/deals/deals-get-deal';
import { adaptApiDealObjectEnum } from '../../adapters/toDto/api-deal-object-enum.adapter';

export interface DealsGetDealParams {
  id: number;
  dealObject: DealObjectEnum;
}

export const dealsGetDealParamsAdapter = {
  adapt(params?: DealsGetDealParams): DealsGetDeal$Params {
    if (!params) {
      return {} as DealsGetDeal$Params;
    }
    return {
      id: params.id,
      dealObject: adaptApiDealObjectEnum(params.dealObject),
    };
  }
};
