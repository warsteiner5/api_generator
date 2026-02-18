import { DealGetDealRejectionReasons$Params } from '../../../swagger/fn/deal/deal-get-deal-rejection-reasons';
import { DealObjectEnum } from '../../enums/deal-object.enum';
import { adaptApiDealObjectEnum } from '../../adapters/toDto/api-deal-object-enum.adapter';

export interface DealGetDealRejectionReasonsParams {
  dealObject: DealObjectEnum;
}

export const dealGetDealRejectionReasonsParamsAdapter = {
  adapt(params?: DealGetDealRejectionReasonsParams): DealGetDealRejectionReasons$Params {
    if (!params) {
      return {} as DealGetDealRejectionReasons$Params;
    }
    return {
      dealObject: adaptApiDealObjectEnum(params.dealObject),
    };
  }
};
