import { ParticipantOfferToTradeGetExternalLotItemsFullOffersInfo$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-external-lot-items-full-offers-info';

// @ts-ignore
export interface ParticipantOfferToTradeGetExternalLotItemsFullOffersInfoParams {
  tradeId: number;
}

export function participantOfferToTradeGetExternalLotItemsFullOffersInfoAdapter(params?: ParticipantOfferToTradeGetExternalLotItemsFullOffersInfoParams): ParticipantOfferToTradeGetExternalLotItemsFullOffersInfo$Params {
  if (!params) {
    return {} as ParticipantOfferToTradeGetExternalLotItemsFullOffersInfo$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
