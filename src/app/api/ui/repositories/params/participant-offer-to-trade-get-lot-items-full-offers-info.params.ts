import { ParticipantOfferToTradeGetLotItemsFullOffersInfo$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-lot-items-full-offers-info';

// @ts-ignore
export interface ParticipantOfferToTradeGetLotItemsFullOffersInfoParams {
  tradeId: number;
}

export function participantOfferToTradeGetLotItemsFullOffersInfoAdapter(params?: ParticipantOfferToTradeGetLotItemsFullOffersInfoParams): ParticipantOfferToTradeGetLotItemsFullOffersInfo$Params {
  if (!params) {
    return {} as ParticipantOfferToTradeGetLotItemsFullOffersInfo$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
