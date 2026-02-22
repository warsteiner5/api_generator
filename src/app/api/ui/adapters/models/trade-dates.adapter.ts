import { ApiTradeDatesDto } from '../../../swagger/models/api-trade-dates-dto';
import { TradeDates } from '../../models/trade-dates.interface';

export const tradeDatesAdapter = (source?: ApiTradeDatesDto | null): TradeDates => {
  return {
    fillingApplicationEndDate: source?.FillingApplicationEndDate,
    id: source?.Id,
    isImmediate: source?.IsImmediate,
    minFillingApplicationEndDateForImmediate: source?.MinFillingApplicationEndDateForImmediate,
    name: source?.Name,
    planedDealSignDate: source?.PlanedDealSignDate,
    rowVersion: source?.RowVersion,
  };
}
