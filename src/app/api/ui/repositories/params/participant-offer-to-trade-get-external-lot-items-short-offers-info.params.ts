import { ParticipantOfferToTradeGetExternalLotItemsShortOffersInfo$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-external-lot-items-short-offers-info';

export interface ParticipantOfferToTradeGetExternalLotItemsShortOffersInfoParams {
  tradeId: number;
}

export const participantOfferToTradeGetExternalLotItemsShortOffersInfoParamsAdapter = {
  adapt(params?: ParticipantOfferToTradeGetExternalLotItemsShortOffersInfoParams): ParticipantOfferToTradeGetExternalLotItemsShortOffersInfo$Params {
    if (!params) {
      return {} as ParticipantOfferToTradeGetExternalLotItemsShortOffersInfo$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
