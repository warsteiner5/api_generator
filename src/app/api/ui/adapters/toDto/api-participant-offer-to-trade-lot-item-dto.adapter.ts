import { ParticipantOfferToTradeLotItem } from '../../models/participant-offer-to-trade-lot-item.interface';
import { ApiParticipantOfferToTradeLotItemDto } from '../../../swagger/models/api-participant-offer-to-trade-lot-item-dto';

export function adaptApiParticipantOfferToTradeLotItemDto(source?: ParticipantOfferToTradeLotItem | null): ApiParticipantOfferToTradeLotItemDto {
  return {
    ExclusiveToTrade: source?.exclusiveToTrade,
    LotItemId: source?.lotItemId,
    ParticipantOfferIds: source?.participantOfferIds ?? [],
    TradeId: source?.tradeId,
  };
}
