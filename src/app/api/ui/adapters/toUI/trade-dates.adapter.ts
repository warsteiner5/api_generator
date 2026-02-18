import { ApiTradeDatesDto } from '../../../swagger/models/api-trade-dates-dto';
import { TradeDates } from '../../models/trade-dates.interface';

export function adaptTradeDatesToUI(source?: ApiTradeDatesDto | null): TradeDates {
  return {
    fillingApplicationEndDate: source?.FillingApplicationEndDate ?? '',
    id: source?.Id ?? 0,
    isImmediate: source?.IsImmediate ?? false,
    minFillingApplicationEndDateForImmediate: source?.MinFillingApplicationEndDateForImmediate ?? '',
    name: source?.Name ?? '',
    planedDealSignDate: source?.PlanedDealSignDate ?? '',
    rowVersion: source?.RowVersion ?? 0,
  };
}
