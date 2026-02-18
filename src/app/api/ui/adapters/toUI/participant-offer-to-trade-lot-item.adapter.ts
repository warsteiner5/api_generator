import { ApiParticipantOfferToTradeLotItemDto } from '../../../swagger/models/api-participant-offer-to-trade-lot-item-dto';
import { ParticipantOfferToTradeLotItem } from '../../models/participant-offer-to-trade-lot-item.interface';

export function adaptParticipantOfferToTradeLotItemToUI(source?: ApiParticipantOfferToTradeLotItemDto | null): ParticipantOfferToTradeLotItem {
  return {
    exclusiveToTrade: source?.ExclusiveToTrade ?? false,
    lotItemId: source?.LotItemId ?? 0,
    participantOfferIds: source?.ParticipantOfferIds ?? [],
    tradeId: source?.TradeId ?? 0,
  };
}
