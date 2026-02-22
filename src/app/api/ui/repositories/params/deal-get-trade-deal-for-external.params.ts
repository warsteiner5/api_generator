import { DealGetTradeDealForExternal$Params } from '../../../swagger/fn/deal/deal-get-trade-deal-for-external';

// @ts-ignore
export interface DealGetTradeDealForExternalParams {
  id: number;
  externalSystemId: number;
}

export function dealGetTradeDealForExternalAdapter(params?: DealGetTradeDealForExternalParams): DealGetTradeDealForExternal$Params {
  if (!params) {
    return {} as DealGetTradeDealForExternal$Params;
  }
  return {
      id: params.id,
      externalSystemId: params.externalSystemId,
  };
}
