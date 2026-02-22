import { DealGetDeal$Params } from '../../../swagger/fn/deal/deal-get-deal';
import { DealObjectEnum } from '../../enums/deal-object.enum';
import { apiDealObjectEnumAdapter } from '../../adapters/enums/api-deal-object-enum.adapter';

// @ts-ignore
export interface DealGetDealParams {
  id: number;
  dealObject: DealObjectEnum;
}

export function dealGetDealAdapter(params?: DealGetDealParams): DealGetDeal$Params {
  if (!params) {
    return {} as DealGetDeal$Params;
  }
  return {
      id: params.id,
      dealObject: apiDealObjectEnumAdapter(params.dealObject),
  };
}
