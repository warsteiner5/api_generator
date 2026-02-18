import { ParticipantOfferToTradeGetOffersByTradeId$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-offers-by-trade-id';

export interface ParticipantOfferToTradeGetOffersByTradeIdParams {
  id: number;
}

export const participantOfferToTradeGetOffersByTradeIdParamsAdapter = {
  adapt(params?: ParticipantOfferToTradeGetOffersByTradeIdParams): ParticipantOfferToTradeGetOffersByTradeId$Params {
    if (!params) {
      return {} as ParticipantOfferToTradeGetOffersByTradeId$Params;
    }
    return {
      id: params.id,
    };
  }
};
