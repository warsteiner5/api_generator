import { CreateTradeFromPlanLotsRequestAlt } from '../../models/create-trade-from-plan-lots-request-alt.interface';
import { ApiCreateTradeFromPlanLotsRequestAltDto } from '../../../swagger/models/api-create-trade-from-plan-lots-request';
import { apiTradePlanLotMarketDtoAdapter } from './api-trade-plan-lot-market-dto.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';

export const apiCreateTradeFromPlanLotsRequestAltDtoAdapter = (source?: CreateTradeFromPlanLotsRequestAlt | null): ApiCreateTradeFromPlanLotsRequestAltDto => {
  return {
    IsLotPriceDetermWithVat: source?.isLotPriceDetermWithVat,
    TradePlanLots: source?.tradePlanLots?.map((item) => apiTradePlanLotMarketDtoAdapter(item)),
    VatRateState: source?.vatRateState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatRateState),
  };
}
