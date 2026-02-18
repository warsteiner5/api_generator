import { MarketOrderChangeDetail } from '../../models/market-order-change-detail.interface';
import { ApiMarketOrderChangeDetailDto } from '../../../swagger/models/api-market-order-change-detail-dto';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';

export function adaptApiMarketOrderChangeDetailDto(source?: MarketOrderChangeDetail | null): ApiMarketOrderChangeDetailDto {
  return {
    Id: source?.id,
    Price: source?.price,
    PriceOfferId: source?.priceOfferId,
    Quantity: source?.quantity,
    VatRate: source?.vatRate,
    VatRateState: adaptApiVatRateStateEnum(source?.vatRateState),
  };
}
