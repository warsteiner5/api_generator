import { TradesGetTenderTenant$Params } from '../../../swagger/fn/trades/trades-get-tender-tenant';

// @ts-ignore
export interface TradesGetTenderTenantParams {
  id: number;
}

export function tradesGetTenderTenantAdapter(params?: TradesGetTenderTenantParams): TradesGetTenderTenant$Params {
  if (!params) {
    return {} as TradesGetTenderTenant$Params;
  }
  return {
      id: params.id,
  };
}
