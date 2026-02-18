import { ParticipantOfferToTradeGetParticipantOffersByTradeId$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-participant-offers-by-trade-id';

export interface ParticipantOfferToTradeGetParticipantOffersByTradeIdParams {
  tradeId: number;
  organizationId: number;
}

export const participantOfferToTradeGetParticipantOffersByTradeIdParamsAdapter = {
  adapt(params?: ParticipantOfferToTradeGetParticipantOffersByTradeIdParams): ParticipantOfferToTradeGetParticipantOffersByTradeId$Params {
    if (!params) {
      return {} as ParticipantOfferToTradeGetParticipantOffersByTradeId$Params;
    }
    return {
      tradeId: params.tradeId,
      organizationId: params.organizationId,
    };
  }
};
