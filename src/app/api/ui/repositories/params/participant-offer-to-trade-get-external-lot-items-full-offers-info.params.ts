import { ParticipantOfferToTradeGetExternalLotItemsFullOffersInfo$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-external-lot-items-full-offers-info';

export interface ParticipantOfferToTradeGetExternalLotItemsFullOffersInfoParams {
  tradeId: number;
}

export const participantOfferToTradeGetExternalLotItemsFullOffersInfoParamsAdapter = {
  adapt(params?: ParticipantOfferToTradeGetExternalLotItemsFullOffersInfoParams): ParticipantOfferToTradeGetExternalLotItemsFullOffersInfo$Params {
    if (!params) {
      return {} as ParticipantOfferToTradeGetExternalLotItemsFullOffersInfo$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
