import { DealObjectEnum } from '../../enums/deal-object.enum';
import { DealsGetCustomerSignInfo$Params } from '../../../swagger/fn/deals/deals-get-customer-sign-info';
import { adaptApiDealObjectEnum } from '../../adapters/toDto/api-deal-object-enum.adapter';

export interface DealsGetCustomerSignInfoParams {
  dealId?: number;
  fileGuid?: string;
  dealObject?: DealObjectEnum;
}

export const dealsGetCustomerSignInfoParamsAdapter = {
  adapt(params?: DealsGetCustomerSignInfoParams): DealsGetCustomerSignInfo$Params {
    if (!params) {
      return {} as DealsGetCustomerSignInfo$Params;
    }
    return {
      DealId: params.dealId,
      FileGuid: params.fileGuid,
      DealObject: adaptApiDealObjectEnum(params.dealObject),
    };
  }
};
