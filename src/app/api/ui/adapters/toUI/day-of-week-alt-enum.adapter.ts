import { ApiDayOfWeekAltEnum } from '../../../swagger/models/api-day-of-week';
import { DayOfWeekAltEnum } from '../../enums/day-of-week-alt.enum';

export function adaptDayOfWeekAltEnumToUI(source?: ApiDayOfWeekAltEnum | null): DayOfWeekAltEnum {
  switch (source) {
    case ApiDayOfWeekAltEnum.Sunday:
      return DayOfWeekAltEnum.Sunday;
    case ApiDayOfWeekAltEnum.Monday:
      return DayOfWeekAltEnum.Monday;
    case ApiDayOfWeekAltEnum.Tuesday:
      return DayOfWeekAltEnum.Tuesday;
    case ApiDayOfWeekAltEnum.Wednesday:
      return DayOfWeekAltEnum.Wednesday;
    case ApiDayOfWeekAltEnum.Thursday:
      return DayOfWeekAltEnum.Thursday;
    case ApiDayOfWeekAltEnum.Friday:
      return DayOfWeekAltEnum.Friday;
    case ApiDayOfWeekAltEnum.Saturday:
      return DayOfWeekAltEnum.Saturday;
    default:
      throw new Error(`Enum value is not defined: ApiDayOfWeekAltEnum=${String(source)}`);
  }
}
