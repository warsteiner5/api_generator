import { DayPeriodEnum } from '../../enums/day-period.enum';
import { ApiDayPeriodEnum } from '../../../swagger/models/api-day-period-enum';

export const apiDayPeriodEnumAdapter = (source?: DayPeriodEnum | null): ApiDayPeriodEnum => {
  switch (source) {
    case DayPeriodEnum.Start:
      return ApiDayPeriodEnum.Start;
    case DayPeriodEnum.Mid:
      return ApiDayPeriodEnum.Mid;
    case DayPeriodEnum.End:
      return ApiDayPeriodEnum.End;
    default:
      throw new Error(`Enum value is not defined: DayPeriodEnum=${String(source)}`);
  }
}
