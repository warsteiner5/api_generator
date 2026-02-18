import { TradePlanLotMarket } from './trade-plan-lot-market.interface';
import { VatRateStateEnum } from '../enums/vat-rate-state.enum';

export interface CreateTradeFromPlanLotsRequestAlt {
  isLotPriceDetermWithVat: boolean;
  tradePlanLots: TradePlanLotMarket[];
  vatRateState: VatRateStateEnum;
}
