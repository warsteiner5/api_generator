import { ApiReturnTradeToFillingAppRequestAltDto } from '../../../swagger/models/api-return-trade-to-filling-app-request';
import { ReturnTradeToFillingAppRequestAlt } from '../../models/return-trade-to-filling-app-request-alt.interface';

export const returnTradeToFillingAppRequestAltAdapter = (source?: ApiReturnTradeToFillingAppRequestAltDto | null): ReturnTradeToFillingAppRequestAlt => {
  return {
    fillingApplicationEndDate: source?.FillingApplicationEndDate,
    planedDealSignDate: source?.PlanedDealSignDate,
    tradeId: source?.TradeId,
  };
}
