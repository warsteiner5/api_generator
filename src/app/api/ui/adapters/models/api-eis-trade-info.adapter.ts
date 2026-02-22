import { EisTradeInfoAlt } from '../../models/eis-trade-info-alt.interface';
import { ApiEisTradeInfoAltDto } from '../../../swagger/models/api-eis-trade-info';

export const apiEisTradeInfoAltDtoAdapter = (source?: EisTradeInfoAlt | null): ApiEisTradeInfoAltDto => {
  return {
    ApplicationRequestOrder: source?.applicationRequestOrder,
    IsEmergency: source?.isEmergency,
    IsOosNonPublic: source?.isOosNonPublic,
    IsSupplierCanCreateContract: source?.isSupplierCanCreateContract,
    NotDishonest: source?.notDishonest,
    OosPurchaseMethodCode: source?.oosPurchaseMethodCode,
    PlanPositionNumber: source?.planPositionNumber,
    PlanRegistrationNumber: source?.planRegistrationNumber,
    ResultsReviewOrder: source?.resultsReviewOrder,
  };
}
