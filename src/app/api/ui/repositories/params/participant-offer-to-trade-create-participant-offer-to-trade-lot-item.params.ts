import { ParticipantOfferToTradeCreateParticipantOfferToTradeLotItem$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-create-participant-offer-to-trade-lot-item';
import { ParticipantOfferToTradeLotItem } from '../../models/participant-offer-to-trade-lot-item.interface';
import { apiParticipantOfferToTradeLotItemDtoAdapter } from '../../adapters/models/api-participant-offer-to-trade-lot-item-dto.adapter';

// @ts-ignore
export interface ParticipantOfferToTradeCreateParticipantOfferToTradeLotItemParams {
  body?: ParticipantOfferToTradeLotItem;
}

export function participantOfferToTradeCreateParticipantOfferToTradeLotItemAdapter(params?: ParticipantOfferToTradeCreateParticipantOfferToTradeLotItemParams): ParticipantOfferToTradeCreateParticipantOfferToTradeLotItem$Params {
  if (!params) {
    return {} as ParticipantOfferToTradeCreateParticipantOfferToTradeLotItem$Params;
  }
  return {
      body: apiParticipantOfferToTradeLotItemDtoAdapter(params.body),
  };
}
