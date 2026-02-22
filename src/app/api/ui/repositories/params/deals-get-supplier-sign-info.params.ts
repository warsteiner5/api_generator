import { DealObjectEnum } from '../../enums/deal-object.enum';
import { DealsGetSupplierSignInfo$Params } from '../../../swagger/fn/deals/deals-get-supplier-sign-info';
import { apiDealObjectEnumAdapter } from '../../adapters/enums/api-deal-object-enum.adapter';

// @ts-ignore
export interface DealsGetSupplierSignInfoParams {
  dealId?: number;
  fileGuid?: string;
  dealObject?: DealObjectEnum;
}

export function dealsGetSupplierSignInfoAdapter(params?: DealsGetSupplierSignInfoParams): DealsGetSupplierSignInfo$Params {
  if (!params) {
    return {} as DealsGetSupplierSignInfo$Params;
  }
  return {
      DealId: params.dealId,
      FileGuid: params.fileGuid,
      DealObject: apiDealObjectEnumAdapter(params.dealObject),
  };
}
