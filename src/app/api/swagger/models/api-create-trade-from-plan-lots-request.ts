/* tslint:disable */
/* eslint-disable */
import { ApiTradePlanLotMarketDto } from '../models/api-trade-plan-lot-market-dto';
import { ApiVatRateStateEnum } from '../models/api-vat-rate-state-enum';
export interface ApiCreateTradeFromPlanLotsRequestAltDto {
  IsLotPriceDetermWithVat?: boolean;
  TradePlanLots?: Array<ApiTradePlanLotMarketDto> | null;
  VatRateState?: ApiVatRateStateEnum;
}
