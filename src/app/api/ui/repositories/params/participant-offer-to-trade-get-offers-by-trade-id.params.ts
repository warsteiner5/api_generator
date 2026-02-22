import { ParticipantOfferToTradeGetOffersByTradeId$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-offers-by-trade-id';

// @ts-ignore
export interface ParticipantOfferToTradeGetOffersByTradeIdParams {
  id: number;
}

export function participantOfferToTradeGetOffersByTradeIdAdapter(params?: ParticipantOfferToTradeGetOffersByTradeIdParams): ParticipantOfferToTradeGetOffersByTradeId$Params {
  if (!params) {
    return {} as ParticipantOfferToTradeGetOffersByTradeId$Params;
  }
  return {
      id: params.id,
  };
}
