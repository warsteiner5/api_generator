import { TradePrepareOrganizationForTradeCreate$Params } from '../../../swagger/fn/trade/trade-prepare-organization-for-trade-create';

export interface TradePrepareOrganizationForTradeCreateParams {
  inn: string;
  kpp: string;
  createIfNotExists: boolean;
}

export const tradePrepareOrganizationForTradeCreateParamsAdapter = {
  adapt(params?: TradePrepareOrganizationForTradeCreateParams): TradePrepareOrganizationForTradeCreate$Params {
    if (!params) {
      return {} as TradePrepareOrganizationForTradeCreate$Params;
    }
    return {
      inn: params.inn,
      kpp: params.kpp,
      createIfNotExists: params.createIfNotExists,
    };
  }
};
