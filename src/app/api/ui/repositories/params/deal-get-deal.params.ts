import { DealGetDeal$Params } from '../../../swagger/fn/deal/deal-get-deal';
import { DealObjectEnum } from '../../enums/deal-object.enum';
import { adaptApiDealObjectEnum } from '../../adapters/toDto/api-deal-object-enum.adapter';

export interface DealGetDealParams {
  id: number;
  dealObject: DealObjectEnum;
}

export const dealGetDealParamsAdapter = {
  adapt(params?: DealGetDealParams): DealGetDeal$Params {
    if (!params) {
      return {} as DealGetDeal$Params;
    }
    return {
      id: params.id,
      dealObject: adaptApiDealObjectEnum(params.dealObject),
    };
  }
};
