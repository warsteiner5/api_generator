import { ParticipantOfferToTradeGetLotItemsFullOffersInfo$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-lot-items-full-offers-info';

export interface ParticipantOfferToTradeGetLotItemsFullOffersInfoParams {
  tradeId: number;
}

export const participantOfferToTradeGetLotItemsFullOffersInfoParamsAdapter = {
  adapt(params?: ParticipantOfferToTradeGetLotItemsFullOffersInfoParams): ParticipantOfferToTradeGetLotItemsFullOffersInfo$Params {
    if (!params) {
      return {} as ParticipantOfferToTradeGetLotItemsFullOffersInfo$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
