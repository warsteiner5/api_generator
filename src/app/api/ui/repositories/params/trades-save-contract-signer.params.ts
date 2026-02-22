import { TradesSaveContractSigner$Params } from '../../../swagger/fn/trades/trades-save-contract-signer';

// @ts-ignore
export interface TradesSaveContractSignerParams {
  tradeId: number;
  userId: number;
}

export function tradesSaveContractSignerAdapter(params?: TradesSaveContractSignerParams): TradesSaveContractSigner$Params {
  if (!params) {
    return {} as TradesSaveContractSigner$Params;
  }
  return {
      tradeId: params.tradeId,
      userId: params.userId,
  };
}
