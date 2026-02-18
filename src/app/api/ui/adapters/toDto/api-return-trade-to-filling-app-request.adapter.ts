import { ReturnTradeToFillingAppRequestAlt } from '../../models/return-trade-to-filling-app-request-alt.interface';
import { ApiReturnTradeToFillingAppRequestAltDto } from '../../../swagger/models/api-return-trade-to-filling-app-request';

export function adaptApiReturnTradeToFillingAppRequestAltDto(source?: ReturnTradeToFillingAppRequestAlt | null): ApiReturnTradeToFillingAppRequestAltDto {
  return {
    FillingApplicationEndDate: source?.fillingApplicationEndDate,
    PlanedDealSignDate: source?.planedDealSignDate,
    TradeId: source?.tradeId,
  };
}
