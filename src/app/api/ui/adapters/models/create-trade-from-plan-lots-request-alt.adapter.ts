import { ApiCreateTradeFromPlanLotsRequestAltDto } from '../../../swagger/models/api-create-trade-from-plan-lots-request';
import { CreateTradeFromPlanLotsRequestAlt } from '../../models/create-trade-from-plan-lots-request-alt.interface';
import { tradePlanLotMarketAdapter } from './trade-plan-lot-market.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';

export const createTradeFromPlanLotsRequestAltAdapter = (source?: ApiCreateTradeFromPlanLotsRequestAltDto | null): CreateTradeFromPlanLotsRequestAlt => {
  return {
    isLotPriceDetermWithVat: source?.IsLotPriceDetermWithVat,
    tradePlanLots: source?.TradePlanLots?.map((item) => tradePlanLotMarketAdapter(item)),
    vatRateState: source?.VatRateState === null ? undefined : vatRateStateEnumAdapter(source?.VatRateState),
  };
}
