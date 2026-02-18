import { ApiEisTradeInfoAltDto } from '../../../swagger/models/api-eis-trade-info';
import { EisTradeInfoAlt } from '../../models/eis-trade-info-alt.interface';

export function adaptEisTradeInfoAltToUI(source?: ApiEisTradeInfoAltDto | null): EisTradeInfoAlt {
  return {
    applicationRequestOrder: source?.ApplicationRequestOrder ?? '',
    isEmergency: source?.IsEmergency ?? false,
    isOosNonPublic: source?.IsOosNonPublic ?? false,
    isSupplierCanCreateContract: source?.IsSupplierCanCreateContract ?? false,
    notDishonest: source?.NotDishonest ?? false,
    oosPurchaseMethodCode: source?.OosPurchaseMethodCode ?? 0,
    planPositionNumber: source?.PlanPositionNumber ?? '',
    planRegistrationNumber: source?.PlanRegistrationNumber ?? '',
    resultsReviewOrder: source?.ResultsReviewOrder ?? '',
  };
}
