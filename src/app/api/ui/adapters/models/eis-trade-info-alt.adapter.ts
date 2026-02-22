import { ApiEisTradeInfoAltDto } from '../../../swagger/models/api-eis-trade-info';
import { EisTradeInfoAlt } from '../../models/eis-trade-info-alt.interface';

export const eisTradeInfoAltAdapter = (source?: ApiEisTradeInfoAltDto | null): EisTradeInfoAlt => {
  return {
    applicationRequestOrder: source?.ApplicationRequestOrder,
    isEmergency: source?.IsEmergency,
    isOosNonPublic: source?.IsOosNonPublic,
    isSupplierCanCreateContract: source?.IsSupplierCanCreateContract,
    notDishonest: source?.NotDishonest,
    oosPurchaseMethodCode: source?.OosPurchaseMethodCode,
    planPositionNumber: source?.PlanPositionNumber,
    planRegistrationNumber: source?.PlanRegistrationNumber,
    resultsReviewOrder: source?.ResultsReviewOrder,
  };
}
