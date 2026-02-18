import { TradesGetTenderTenant$Params } from '../../../swagger/fn/trades/trades-get-tender-tenant';

export interface TradesGetTenderTenantParams {
  id: number;
}

export const tradesGetTenderTenantParamsAdapter = {
  adapt(params?: TradesGetTenderTenantParams): TradesGetTenderTenant$Params {
    if (!params) {
      return {} as TradesGetTenderTenant$Params;
    }
    return {
      id: params.id,
    };
  }
};
