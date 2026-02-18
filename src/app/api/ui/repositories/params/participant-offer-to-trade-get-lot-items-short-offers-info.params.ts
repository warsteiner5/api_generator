import { ParticipantOfferToTradeGetLotItemsShortOffersInfo$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-lot-items-short-offers-info';

export interface ParticipantOfferToTradeGetLotItemsShortOffersInfoParams {
  tradeId: number;
}

export const participantOfferToTradeGetLotItemsShortOffersInfoParamsAdapter = {
  adapt(params?: ParticipantOfferToTradeGetLotItemsShortOffersInfoParams): ParticipantOfferToTradeGetLotItemsShortOffersInfo$Params {
    if (!params) {
      return {} as ParticipantOfferToTradeGetLotItemsShortOffersInfo$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
