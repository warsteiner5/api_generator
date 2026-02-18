import { TradeGetParticipantInfoArchive$Params } from '../../../swagger/fn/trade/trade-get-participant-info-archive';

export interface TradeGetParticipantInfoArchiveParams {
  tradeId: number;
}

export const tradeGetParticipantInfoArchiveParamsAdapter = {
  adapt(params?: TradeGetParticipantInfoArchiveParams): TradeGetParticipantInfoArchive$Params {
    if (!params) {
      return {} as TradeGetParticipantInfoArchive$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
