import { VatRateStateEnum } from '../enums/vat-rate-state.enum';

export interface MarketOrderChangeDetail {
  id: number;
  price: number;
  priceOfferId: number;
  quantity: number;
  vatRate: number;
  vatRateState: VatRateStateEnum;
}
