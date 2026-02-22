import { DayOfWeekAltEnum } from '../../enums/day-of-week-alt.enum';
import { ApiDayOfWeekAltEnum } from '../../../swagger/models/api-day-of-week';

export const apiDayOfWeekAltEnumAdapter = (source?: DayOfWeekAltEnum | null): ApiDayOfWeekAltEnum => {
  switch (source) {
    case DayOfWeekAltEnum.Sunday:
      return ApiDayOfWeekAltEnum.Sunday;
    case DayOfWeekAltEnum.Monday:
      return ApiDayOfWeekAltEnum.Monday;
    case DayOfWeekAltEnum.Tuesday:
      return ApiDayOfWeekAltEnum.Tuesday;
    case DayOfWeekAltEnum.Wednesday:
      return ApiDayOfWeekAltEnum.Wednesday;
    case DayOfWeekAltEnum.Thursday:
      return ApiDayOfWeekAltEnum.Thursday;
    case DayOfWeekAltEnum.Friday:
      return ApiDayOfWeekAltEnum.Friday;
    case DayOfWeekAltEnum.Saturday:
      return ApiDayOfWeekAltEnum.Saturday;
    default:
      throw new Error(`Enum value is not defined: DayOfWeekAltEnum=${String(source)}`);
  }
}
