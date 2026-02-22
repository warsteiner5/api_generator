import { DealGetDealRejectionReasons$Params } from '../../../swagger/fn/deal/deal-get-deal-rejection-reasons';
import { DealObjectEnum } from '../../enums/deal-object.enum';
import { apiDealObjectEnumAdapter } from '../../adapters/enums/api-deal-object-enum.adapter';

// @ts-ignore
export interface DealGetDealRejectionReasonsParams {
  dealObject: DealObjectEnum;
}

export function dealGetDealRejectionReasonsAdapter(params?: DealGetDealRejectionReasonsParams): DealGetDealRejectionReasons$Params {
  if (!params) {
    return {} as DealGetDealRejectionReasons$Params;
  }
  return {
      dealObject: apiDealObjectEnumAdapter(params.dealObject),
  };
}
