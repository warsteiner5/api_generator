import { TradesSaveContractSigner$Params } from '../../../swagger/fn/trades/trades-save-contract-signer';

export interface TradesSaveContractSignerParams {
  tradeId: number;
  userId: number;
}

export const tradesSaveContractSignerParamsAdapter = {
  adapt(params?: TradesSaveContractSignerParams): TradesSaveContractSigner$Params {
    if (!params) {
      return {} as TradesSaveContractSigner$Params;
    }
    return {
      tradeId: params.tradeId,
      userId: params.userId,
    };
  }
};
