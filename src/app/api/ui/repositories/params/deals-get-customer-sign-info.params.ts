import { DealObjectEnum } from '../../enums/deal-object.enum';
import { DealsGetCustomerSignInfo$Params } from '../../../swagger/fn/deals/deals-get-customer-sign-info';
import { apiDealObjectEnumAdapter } from '../../adapters/enums/api-deal-object-enum.adapter';

// @ts-ignore
export interface DealsGetCustomerSignInfoParams {
  dealId?: number;
  fileGuid?: string;
  dealObject?: DealObjectEnum;
}

export function dealsGetCustomerSignInfoAdapter(params?: DealsGetCustomerSignInfoParams): DealsGetCustomerSignInfo$Params {
  if (!params) {
    return {} as DealsGetCustomerSignInfo$Params;
  }
  return {
      DealId: params.dealId,
      FileGuid: params.fileGuid,
      DealObject: apiDealObjectEnumAdapter(params.dealObject),
  };
}
