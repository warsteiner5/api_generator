import { ApiMarketOrderChangeDetailDto } from '../../../swagger/models/api-market-order-change-detail-dto';
import { MarketOrderChangeDetail } from '../../models/market-order-change-detail.interface';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';

export const marketOrderChangeDetailAdapter = (source?: ApiMarketOrderChangeDetailDto | null): MarketOrderChangeDetail => {
  return {
    id: source?.Id,
    participantOfferId: source?.ParticipantOfferId,
    price: source?.Price,
    quantity: source?.Quantity,
    vatRate: source?.VatRate,
    vatRateState: source?.VatRateState === null ? undefined : vatRateStateEnumAdapter(source?.VatRateState),
  };
}
