import { DealGetTradeDealForExternal$Params } from '../../../swagger/fn/deal/deal-get-trade-deal-for-external';

export interface DealGetTradeDealForExternalParams {
  id: number;
  externalSystemId: number;
}

export const dealGetTradeDealForExternalParamsAdapter = {
  adapt(params?: DealGetTradeDealForExternalParams): DealGetTradeDealForExternal$Params {
    if (!params) {
      return {} as DealGetTradeDealForExternal$Params;
    }
    return {
      id: params.id,
      externalSystemId: params.externalSystemId,
    };
  }
};
