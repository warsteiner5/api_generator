import { CreateTradeFromPlanLotsRequestAlt } from '../../models/create-trade-from-plan-lots-request-alt.interface';
import { ApiCreateTradeFromPlanLotsRequestAltDto } from '../../../swagger/models/api-create-trade-from-plan-lots-request';
import { adaptApiTradePlanLotMarketDto } from './api-trade-plan-lot-market-dto.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';

export function adaptApiCreateTradeFromPlanLotsRequestAltDto(source?: CreateTradeFromPlanLotsRequestAlt | null): ApiCreateTradeFromPlanLotsRequestAltDto {
  return {
    IsLotPriceDetermWithVat: source?.isLotPriceDetermWithVat,
    TradePlanLots: (source?.tradePlanLots ?? []).map((item) => adaptApiTradePlanLotMarketDto(item)),
    VatRateState: adaptApiVatRateStateEnum(source?.vatRateState),
  };
}
