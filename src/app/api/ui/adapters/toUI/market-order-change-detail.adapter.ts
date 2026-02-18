import { ApiMarketOrderChangeDetailDto } from '../../../swagger/models/api-market-order-change-detail-dto';
import { MarketOrderChangeDetail } from '../../models/market-order-change-detail.interface';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';

export function adaptMarketOrderChangeDetailToUI(source?: ApiMarketOrderChangeDetailDto | null): MarketOrderChangeDetail {
  return {
    id: source?.Id ?? 0,
    price: source?.Price ?? 0,
    priceOfferId: source?.PriceOfferId ?? 0,
    quantity: source?.Quantity ?? 0,
    vatRate: source?.VatRate ?? 0,
    vatRateState: adaptVatRateStateEnumToUI(source?.VatRateState),
  };
}
