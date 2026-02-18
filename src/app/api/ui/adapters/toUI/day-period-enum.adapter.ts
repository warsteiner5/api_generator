import { ApiDayPeriodEnum } from '../../../swagger/models/api-day-period-enum';
import { DayPeriodEnum } from '../../enums/day-period.enum';

export function adaptDayPeriodEnumToUI(source?: ApiDayPeriodEnum | null): DayPeriodEnum {
  switch (source) {
    case ApiDayPeriodEnum.Start:
      return DayPeriodEnum.Start;
    case ApiDayPeriodEnum.Mid:
      return DayPeriodEnum.Mid;
    case ApiDayPeriodEnum.End:
      return DayPeriodEnum.End;
    default:
      throw new Error(`Enum value is not defined: ApiDayPeriodEnum=${String(source)}`);
  }
}
