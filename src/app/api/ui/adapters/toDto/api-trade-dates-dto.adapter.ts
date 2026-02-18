import { TradeDates } from '../../models/trade-dates.interface';
import { ApiTradeDatesDto } from '../../../swagger/models/api-trade-dates-dto';

export function adaptApiTradeDatesDto(source?: TradeDates | null): ApiTradeDatesDto {
  return {
    FillingApplicationEndDate: source?.fillingApplicationEndDate,
    Id: source?.id,
    IsImmediate: source?.isImmediate,
    MinFillingApplicationEndDateForImmediate: source?.minFillingApplicationEndDateForImmediate,
    Name: source?.name,
    PlanedDealSignDate: source?.planedDealSignDate,
    RowVersion: source?.rowVersion,
  };
}
