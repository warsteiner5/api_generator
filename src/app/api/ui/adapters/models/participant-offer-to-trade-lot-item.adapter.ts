import { ApiParticipantOfferToTradeLotItemDto } from '../../../swagger/models/api-participant-offer-to-trade-lot-item-dto';
import { ParticipantOfferToTradeLotItem } from '../../models/participant-offer-to-trade-lot-item.interface';

export const participantOfferToTradeLotItemAdapter = (source?: ApiParticipantOfferToTradeLotItemDto | null): ParticipantOfferToTradeLotItem => {
  return {
    exclusiveToTrade: source?.ExclusiveToTrade,
    lotItemId: source?.LotItemId,
    participantOfferIds: source?.ParticipantOfferIds,
    tradeId: source?.TradeId,
  };
}
