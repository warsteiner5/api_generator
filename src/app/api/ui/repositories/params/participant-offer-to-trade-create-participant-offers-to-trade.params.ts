import { CreateParticipantOffersToTrade } from '../../models/create-participant-offers-to-trade.interface';
import { ParticipantOfferToTradeCreateParticipantOffersToTrade$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-create-participant-offers-to-trade';
import { adaptApiCreateParticipantOffersToTradeDto } from '../../adapters/toDto/api-create-participant-offers-to-trade-dto.adapter';

export interface ParticipantOfferToTradeCreateParticipantOffersToTradeParams {
  tradeId: number;
  body?: CreateParticipantOffersToTrade;
}

export const participantOfferToTradeCreateParticipantOffersToTradeParamsAdapter = {
  adapt(params?: ParticipantOfferToTradeCreateParticipantOffersToTradeParams): ParticipantOfferToTradeCreateParticipantOffersToTrade$Params {
    if (!params) {
      return {} as ParticipantOfferToTradeCreateParticipantOffersToTrade$Params;
    }
    return {
      tradeId: params.tradeId,
      body: adaptApiCreateParticipantOffersToTradeDto(params.body),
    };
  }
};
