import { MarketOrderChangeDetail } from '../../models/market-order-change-detail.interface';
import { ApiMarketOrderChangeDetailDto } from '../../../swagger/models/api-market-order-change-detail-dto';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';

export const apiMarketOrderChangeDetailDtoAdapter = (source?: MarketOrderChangeDetail | null): ApiMarketOrderChangeDetailDto => {
  return {
    Id: source?.id,
    ParticipantOfferId: source?.participantOfferId,
    Price: source?.price,
    Quantity: source?.quantity,
    VatRate: source?.vatRate,
    VatRateState: source?.vatRateState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatRateState),
  };
}
