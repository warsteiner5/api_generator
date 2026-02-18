import { TradeGetCommissionInformationForLot$Params } from '../../../swagger/fn/trade/trade-get-commission-information-for-lot';

export interface TradeGetCommissionInformationForLotParams {
  lotId: number;
}

export const tradeGetCommissionInformationForLotParamsAdapter = {
  adapt(params?: TradeGetCommissionInformationForLotParams): TradeGetCommissionInformationForLot$Params {
    if (!params) {
      return {} as TradeGetCommissionInformationForLot$Params;
    }
    return {
      lotId: params.lotId,
    };
  }
};
