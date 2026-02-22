import { ParticipantOfferToTradeGetParticipantOffersByTradeId$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-participant-offers-by-trade-id';

// @ts-ignore
export interface ParticipantOfferToTradeGetParticipantOffersByTradeIdParams {
  tradeId: number;
  organizationId: number;
}

export function participantOfferToTradeGetParticipantOffersByTradeIdAdapter(params?: ParticipantOfferToTradeGetParticipantOffersByTradeIdParams): ParticipantOfferToTradeGetParticipantOffersByTradeId$Params {
  if (!params) {
    return {} as ParticipantOfferToTradeGetParticipantOffersByTradeId$Params;
  }
  return {
      tradeId: params.tradeId,
      organizationId: params.organizationId,
  };
}
