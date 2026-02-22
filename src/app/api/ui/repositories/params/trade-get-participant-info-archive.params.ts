import { TradeGetParticipantInfoArchive$Params } from '../../../swagger/fn/trade/trade-get-participant-info-archive';

// @ts-ignore
export interface TradeGetParticipantInfoArchiveParams {
  tradeId: number;
}

export function tradeGetParticipantInfoArchiveAdapter(params?: TradeGetParticipantInfoArchiveParams): TradeGetParticipantInfoArchive$Params {
  if (!params) {
    return {} as TradeGetParticipantInfoArchive$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
