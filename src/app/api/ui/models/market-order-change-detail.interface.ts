import { VatRateStateEnum } from '../enums/vat-rate-state.enum';

// @ts-ignore
export interface MarketOrderChangeDetail {
  id: number;
  participantOfferId: number;
  price: number;
  quantity: number;
  vatRate: number;
  vatRateState: VatRateStateEnum;
}
