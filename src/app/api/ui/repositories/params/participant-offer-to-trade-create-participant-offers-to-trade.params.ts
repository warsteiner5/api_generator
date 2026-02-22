import { CreateParticipantOffersToTrade } from '../../models/create-participant-offers-to-trade.interface';
import { ParticipantOfferToTradeCreateParticipantOffersToTrade$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-create-participant-offers-to-trade';
import { apiCreateParticipantOffersToTradeDtoAdapter } from '../../adapters/models/api-create-participant-offers-to-trade-dto.adapter';

// @ts-ignore
export interface ParticipantOfferToTradeCreateParticipantOffersToTradeParams {
  tradeId: number;
  body?: CreateParticipantOffersToTrade;
}

export function participantOfferToTradeCreateParticipantOffersToTradeAdapter(params?: ParticipantOfferToTradeCreateParticipantOffersToTradeParams): ParticipantOfferToTradeCreateParticipantOffersToTrade$Params {
  if (!params) {
    return {} as ParticipantOfferToTradeCreateParticipantOffersToTrade$Params;
  }
  return {
      tradeId: params.tradeId,
      body: apiCreateParticipantOffersToTradeDtoAdapter(params.body),
  };
}
