import { DealObjectEnum } from '../../enums/deal-object.enum';
import { DealsGetSupplierSignInfo$Params } from '../../../swagger/fn/deals/deals-get-supplier-sign-info';
import { adaptApiDealObjectEnum } from '../../adapters/toDto/api-deal-object-enum.adapter';

export interface DealsGetSupplierSignInfoParams {
  dealId?: number;
  fileGuid?: string;
  dealObject?: DealObjectEnum;
}

export const dealsGetSupplierSignInfoParamsAdapter = {
  adapt(params?: DealsGetSupplierSignInfoParams): DealsGetSupplierSignInfo$Params {
    if (!params) {
      return {} as DealsGetSupplierSignInfo$Params;
    }
    return {
      DealId: params.dealId,
      FileGuid: params.fileGuid,
      DealObject: adaptApiDealObjectEnum(params.dealObject),
    };
  }
};
