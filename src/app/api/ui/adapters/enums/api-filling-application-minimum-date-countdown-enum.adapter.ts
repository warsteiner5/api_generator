import { FillingApplicationMinimumDateCountdownEnum } from '../../enums/filling-application-minimum-date-countdown.enum';
import { ApiFillingApplicationMinimumDateCountdownEnum } from '../../../swagger/models/api-filling-application-minimum-date-countdown-enum';

export const apiFillingApplicationMinimumDateCountdownEnumAdapter = (source?: FillingApplicationMinimumDateCountdownEnum | null): ApiFillingApplicationMinimumDateCountdownEnum => {
  switch (source) {
    case FillingApplicationMinimumDateCountdownEnum.FromTradePublish:
      return ApiFillingApplicationMinimumDateCountdownEnum.FromTradePublish;
    case FillingApplicationMinimumDateCountdownEnum.IngoreTradePublishDate:
      return ApiFillingApplicationMinimumDateCountdownEnum.IngoreTradePublishDate;
    default:
      throw new Error(`Enum value is not defined: FillingApplicationMinimumDateCountdownEnum=${String(source)}`);
  }
}
