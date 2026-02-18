import { ApiCreateTradeFromPlanLotsRequestAltDto } from '../../../swagger/models/api-create-trade-from-plan-lots-request';
import { CreateTradeFromPlanLotsRequestAlt } from '../../models/create-trade-from-plan-lots-request-alt.interface';
import { adaptTradePlanLotMarketToUI } from './trade-plan-lot-market.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';

export function adaptCreateTradeFromPlanLotsRequestAltToUI(source?: ApiCreateTradeFromPlanLotsRequestAltDto | null): CreateTradeFromPlanLotsRequestAlt {
  return {
    isLotPriceDetermWithVat: source?.IsLotPriceDetermWithVat ?? false,
    tradePlanLots: (source?.TradePlanLots ?? []).map((item) => adaptTradePlanLotMarketToUI(item)),
    vatRateState: adaptVatRateStateEnumToUI(source?.VatRateState),
  };
}
