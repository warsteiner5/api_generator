import { TradeGetCommissionInformationForLot$Params } from '../../../swagger/fn/trade/trade-get-commission-information-for-lot';

// @ts-ignore
export interface TradeGetCommissionInformationForLotParams {
  lotId: number;
}

export function tradeGetCommissionInformationForLotAdapter(params?: TradeGetCommissionInformationForLotParams): TradeGetCommissionInformationForLot$Params {
  if (!params) {
    return {} as TradeGetCommissionInformationForLot$Params;
  }
  return {
      lotId: params.lotId,
  };
}
