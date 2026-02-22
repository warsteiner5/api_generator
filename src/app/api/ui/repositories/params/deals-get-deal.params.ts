import { DealObjectEnum } from '../../enums/deal-object.enum';
import { DealsGetDeal$Params } from '../../../swagger/fn/deals/deals-get-deal';
import { apiDealObjectEnumAdapter } from '../../adapters/enums/api-deal-object-enum.adapter';

// @ts-ignore
export interface DealsGetDealParams {
  id: number;
  dealObject: DealObjectEnum;
}

export function dealsGetDealAdapter(params?: DealsGetDealParams): DealsGetDeal$Params {
  if (!params) {
    return {} as DealsGetDeal$Params;
  }
  return {
      id: params.id,
      dealObject: apiDealObjectEnumAdapter(params.dealObject),
  };
}
