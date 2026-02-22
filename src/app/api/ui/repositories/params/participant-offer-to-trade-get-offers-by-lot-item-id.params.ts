import { ParticipantOfferToTradeGetOffersByLotItemId$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-offers-by-lot-item-id';

// @ts-ignore
export interface ParticipantOfferToTradeGetOffersByLotItemIdParams {
  id: number;
}

export function participantOfferToTradeGetOffersByLotItemIdAdapter(params?: ParticipantOfferToTradeGetOffersByLotItemIdParams): ParticipantOfferToTradeGetOffersByLotItemId$Params {
  if (!params) {
    return {} as ParticipantOfferToTradeGetOffersByLotItemId$Params;
  }
  return {
      id: params.id,
  };
}
