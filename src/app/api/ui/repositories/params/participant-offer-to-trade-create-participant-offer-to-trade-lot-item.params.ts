import { ParticipantOfferToTradeCreateParticipantOfferToTradeLotItem$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-create-participant-offer-to-trade-lot-item';
import { ParticipantOfferToTradeLotItem } from '../../models/participant-offer-to-trade-lot-item.interface';
import { adaptApiParticipantOfferToTradeLotItemDto } from '../../adapters/toDto/api-participant-offer-to-trade-lot-item-dto.adapter';

export interface ParticipantOfferToTradeCreateParticipantOfferToTradeLotItemParams {
  body?: ParticipantOfferToTradeLotItem;
}

export const participantOfferToTradeCreateParticipantOfferToTradeLotItemParamsAdapter = {
  adapt(params?: ParticipantOfferToTradeCreateParticipantOfferToTradeLotItemParams): ParticipantOfferToTradeCreateParticipantOfferToTradeLotItem$Params {
    if (!params) {
      return {} as ParticipantOfferToTradeCreateParticipantOfferToTradeLotItem$Params;
    }
    return {
      body: adaptApiParticipantOfferToTradeLotItemDto(params.body),
    };
  }
};
