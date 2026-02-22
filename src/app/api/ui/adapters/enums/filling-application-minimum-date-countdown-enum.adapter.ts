import { ApiFillingApplicationMinimumDateCountdownEnum } from '../../../swagger/models/api-filling-application-minimum-date-countdown-enum';
import { FillingApplicationMinimumDateCountdownEnum } from '../../enums/filling-application-minimum-date-countdown.enum';

export const fillingApplicationMinimumDateCountdownEnumAdapter = (source?: ApiFillingApplicationMinimumDateCountdownEnum | null): FillingApplicationMinimumDateCountdownEnum => {
  switch (source) {
    case ApiFillingApplicationMinimumDateCountdownEnum.FromTradePublish:
      return FillingApplicationMinimumDateCountdownEnum.FromTradePublish;
    case ApiFillingApplicationMinimumDateCountdownEnum.IngoreTradePublishDate:
      return FillingApplicationMinimumDateCountdownEnum.IngoreTradePublishDate;
    default:
      throw new Error(`Enum value is not defined: ApiFillingApplicationMinimumDateCountdownEnum=${String(source)}`);
  }
}
